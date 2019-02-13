import React, { Component } from 'react'
import { observer } from 'mobx-react'
import PropTypes from 'prop-types'
import { withNamespaces } from 'react-i18next'
import { Button, Modal, ModalHeader, ModalBody,
  ModalFooter, FormGroup, Label, Input } from 'reactstrap'

import Tags from './Tags'
import { keys } from 'src/i18n/resources'


@withNamespaces()
@observer
class EditStarModal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      description: '',
      tags: [],
    }

    this.setField = this.setField.bind(this)
    this.editStar = this.editStar.bind(this)
  }

  static propTypes = {
    t: PropTypes.func.isRequired,
    isModalOpen: PropTypes.bool.isRequired,
    toggle: PropTypes.func.isRequired,
    editStar: PropTypes.func.isRequired,
    star: PropTypes.shape({
      id: PropTypes.string.isRequired,
      githubRepository: PropTypes.string.isRequired,
      description: PropTypes.string,
      tags: PropTypes.array,
    }),
  }

  componentDidMount() {
    const { description, tags } = this.props.star

    this.setState({
      description: description || '',
      tags: tags || [],
    })
  }


  editStar() {
    const { star, toggle } = this.props
    const { id } = star
    const { description, tags } = this.state
    this.props.editStar({ id, description, tags })
    toggle()
  }

  setField(field, value) {
    const obj = {}
    obj[field] = value
    this.setState(obj)
  }


  render() {

    const { star, isModalOpen, toggle, t } = this.props
    const { githubRepository } = star
    const { description, tags } = this.state

    return (
      <div>
        <Modal isOpen={isModalOpen} toggle={toggle}>
          <ModalHeader toggle={this.toggle}>{t(keys.editStar)}</ModalHeader>
          <ModalBody>
            <FormGroup>
              <Label for="repository">Repository</Label>
              <Input
                disabled
                type="text"
                name="repository"
                id="repository"
                value={githubRepository}
              />
            </FormGroup>
            <FormGroup>
              <Label for="description">{t(keys.description)}</Label>
              <Input
                type="text"
                name="description"
                id="description"
                value={description}
                onChange={(e) => this.setField('description', e.target.value) }
              />
            </FormGroup>
            <Tags
              tags={tags}
              setTags={(tags) => {
                this.setField('tags', tags)
              }}
            />
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={() => this.editStar()}>{t(keys.updateStar)}</Button>
            {' '}
            <Button color="secondary" onClick={() => toggle()}>{t(keys.cancel)}</Button>
          </ModalFooter>
        </Modal>
      </div>
    )
  }

}

export default EditStarModal
