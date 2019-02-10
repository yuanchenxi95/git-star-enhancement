import React, {Component, Fragment} from 'react'
import { observer } from 'mobx-react'
import PropTypes from 'prop-types'
import { withNamespaces } from 'react-i18next'
import { Card, Button, CardHeader, CardBody,
  CardTitle, CardText, Badge } from 'reactstrap'
import map from 'lodash/map'

@withNamespaces()
@observer
class StarCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
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
    removeStar: PropTypes.func.isRequired,
  }


  renderTags(Tags) {
    return map(Tags, (t, idx) => {

      return (
        <Fragment key={idx}>
          <Badge color='dark'>{t.tagName}</Badge>
          {'  '}
        </Fragment>
      )
    })
  }

  render() {
    const { star, removeStar } = this.props
    const { githubRepository, description, Tags, id } = star
    return (
      <Card>
        <CardHeader>
          <a target='_blank' rel='noopener noreferrer' href={`https://github.com/${githubRepository}`}>
            <b>{githubRepository}</b>
          </a>
          <Button
            color={'secondary'}
            size='sm'
            onClick={() => removeStar({ id })}
            className='float-right'
          >
            Unstar
          </Button>

        </CardHeader>
        <CardBody>
          <CardTitle>{this.renderTags(Tags)}</CardTitle>
          <CardText>{description}</CardText>
        </CardBody>
      </Card>
    )
  }

}

export default StarCard
