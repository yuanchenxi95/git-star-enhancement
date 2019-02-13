import React, {Component, Fragment} from 'react'
import { observer } from 'mobx-react'
import PropTypes from 'prop-types'
import { withNamespaces } from 'react-i18next'
import { Card, Button, ButtonGroup, CardHeader, CardBody,
  CardTitle, CardText, Badge, Row, Col } from 'reactstrap'
import map from 'lodash/map'

import EditStarModal from './EditStarModal'
import { keys } from 'src/i18n/resources'

@withNamespaces()
@observer
class StarCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isEditStarModalOpen: false,
    }
    this.toggle = this.toggle.bind(this)
    this.renderTags = this.renderTags.bind(this)
  }

  static propTypes = {
    t: PropTypes.func.isRequired,
    star: PropTypes.shape({
      githubRepository: PropTypes.string,
      username: PropTypes.string,
      description: PropTypes.string,
      Tags: PropTypes.array,
    }),
    editStar: PropTypes.func.isRequired,
    removeStar: PropTypes.func.isRequired,
  }

  toggle() {
    this.setState({
      isEditStarModalOpen: !this.state.isEditStarModalOpen,
    })
  }


  renderTags(tags) {
    return map(tags, (t, idx) => {
      return (
        <Fragment key={idx}>
          <Badge color='dark'>{t}</Badge>
          {'  '}
        </Fragment>
      )
    })
  }

  render() {
    const { star, removeStar, editStar, t } = this.props
    const { githubRepository, description, tags, id } = star
    return (
      <Card>
        <CardHeader>

          <EditStarModal
            isModalOpen={this.state.isEditStarModalOpen}
            toggle={this.toggle}
            editStar={editStar}
            star={star}
          />

          <Row>
            <Col xs="9">
              <a target='_blank' rel='noopener noreferrer' href={`https://github.com/${githubRepository}`}>
                <b>{githubRepository}</b>
              </a>
            </Col>
            <Col xs="3">
              <ButtonGroup className={'float-right'}>
                <Button
                  color={'success'}
                  size='sm'
                  onClick={this.toggle}
                >
                  {t(keys.editStar)}
                </Button>
                <Button
                  color={'secondary'}
                  size='sm'
                  onClick={() => removeStar({ id })}
                >
                  {t(keys.unstar)}
                </Button>
              </ButtonGroup>
            </Col>
          </Row>

        </CardHeader>
        <CardBody>
          <CardTitle>{this.renderTags(tags)}</CardTitle>
          <CardText>{description}</CardText>
        </CardBody>
      </Card>
    )
  }

}

export default StarCard
