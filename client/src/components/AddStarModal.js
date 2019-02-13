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
class AddStarModal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modal: false,
      githubRepository: '',
      description: '',
      tags: [],
    }

    this.toggle = this.toggle.bind(this)
    this.setField = this.setField.bind(this)
    this.addStar = this.addStar.bind(this)
  }

  static propTypes = {
    t: PropTypes.func.isRequired,
    addStar: PropTypes.func.isRequired,
    // logOut: PropTypes.func.isRequired,
  }

  toggle() {
    this.setState({
      modal: !this.state.modal,
    })
  }

  setField(field, value) {
    const obj = {}
    obj[field] = value
    this.setState(obj)
  }

  addStar() {
    const { githubRepository, description, tags } = this.state
    this.props.addStar({ githubRepository, description, tags })
    this.toggle()
  }

  render() {
    const { t } = this.props
    return (
      <div>
        <Button color='primary' onClick={this.toggle}>{t(keys.addStar)}</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>{t(keys.addStar)}</ModalHeader>
          <ModalBody>
            <FormGroup>
              <Label for="repository">Repository</Label>
              <Input
                type="text"
                name="repository"
                id="repository"
                onChange={(e) => this.setField('githubRepository', e.target.value) }
              />
            </FormGroup>
            <FormGroup>
              <Label for="description">{t(keys.description)}</Label>
              <Input
                type="text"
                name="description"
                id="description"
                onChange={(e) => this.setField('description', e.target.value) }
              />
            </FormGroup>
            <Tags
              setTags={(tags) => {
                this.setField('tags', tags)
              }}
            />
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={() => this.addStar()}>{t(keys.addStar)}</Button>
            {' '}
            <Button color="secondary" onClick={() => this.toggle()}>{t(keys.cancel)}</Button>
          </ModalFooter>
        </Modal>
      </div>
    )
  }

}

export default AddStarModal
