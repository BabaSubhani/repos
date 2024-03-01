import './index.css'

const RepositoryItem = props => {
  const {eachRepo} = props
  const {avatarUrl, forksCount, issuesCount, name, starsCount} = eachRepo

  return (
    <div>
      <li className="repo-item">
        <img src={avatarUrl} alt={name} className="avatar-img" />
        <h1 className="repo-name">{name}</h1>
        <div className="other-information-top-container">
          <div className="other-information-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
              alt="stars"
              className="other-imgs"
            />
            <p>{`${starsCount} stars`}</p>
          </div>
          <div className="other-information-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
              alt="forks"
              className="other-imgs"
            />
            <p>{`${forksCount} forks`}</p>
          </div>
          <div className="other-information-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
              alt="open issues"
              className="other-imgs"
            />
            <p>{`${issuesCount} open issues`}</p>
          </div>
        </div>
      </li>
    </div>
  )
}

export default RepositoryItem
