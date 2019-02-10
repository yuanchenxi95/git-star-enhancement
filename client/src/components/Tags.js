import React, {Component, Fragment} from 'react'
import { observer } from 'mobx-react'
import PropTypes from 'prop-types'
import { withNamespaces } from 'react-i18next'
import {Button, FormGroup, Input, Label, ListGroup, ListGroupItem} from 'reactstrap'
import findIndex from 'lodash/findIndex'
import filter from 'lodash/filter'
import map from 'lodash/map'
import isNil from 'lodash/isNil'

const KeyCodes = {
  comma: 188,
  enter: 13,
}

const delimiters = new Set([KeyCodes.comma, KeyCodes.enter])

@withNamespaces()
@observer
class Tags extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tag: '',
      tags: [],
    }

    this.setField = this.setField.bind(this)
    this.onKeyDown = this.onKeyDown.bind(this)
    this.handleAddition = this.handleAddition.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.renderTags = this.renderTags.bind(this)
  }

  static propTypes = {
    t: PropTypes.func.isRequired,
    tags: PropTypes.array,
    setTags: PropTypes.func.isRequired,
  }

  componentDidMount() {
    const { tags } = this.props
    if (!isNil(tags)) {

      this.setState({
        tags: [].concat(tags),
      })
    }
  }

  setField(field, value) {
    const obj = {}
    obj[field] = value
    this.setState(obj)
  }

  onKeyDown(e) {
    if (delimiters.has(e.keyCode)) {
      this.handleAddition(this.state.tag)
      this.setState({
        tag: '',
      })
    }
  }

  handleDelete(tag) {
    const { setTags } = this.props
    const { tags } = this.state
    const newTags = filter(tags, (t) => {
      return t !== tag
    })
    this.setField('tags', newTags)
    setTags(newTags)
  }

  handleAddition(tag) {
    const { setTags } = this.props
    const { tags } = this.state

    if (findIndex(tags, (t) => t === tag) === -1) {
      const newTags = tags.concat([tag])
      this.setField('tags', newTags)
      setTags(newTags)
    }
  }

  renderTags() {
    return (
      <ListGroup>
        {
          map(this.state.tags, (tag, idx) => {
            return (
              <Fragment key={idx}>
                <ListGroupItem>
                  {tag}
                  <Button
                    color={'secondary'}
                    size='sm'
                    onClick={() => this.handleDelete(tag)}
                    className='float-right'
                  >
                    Remove
                  </Button>
                </ListGroupItem>
              </Fragment>
            )
          })
        }
      </ListGroup>
    )


  }

  render() {

    return (
      <div>
        {this.renderTags()}
        <FormGroup>
          <Label for="tag">Tag</Label>
          <Input
            type="text"
            name="tag"
            id="tag"
            value={this.state.tag}
            onChange={(e) => this.setField('tag', e.target.value) }
            onKeyDown={this.onKeyDown}
          />
        </FormGroup>
      </div>

    )

  }

}

export default Tags
