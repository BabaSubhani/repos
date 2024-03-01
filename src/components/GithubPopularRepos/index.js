import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LanguageFilterItem from '../LanguageFilterItem'
import RepositoryItem from '../RepositoryItem'
import './index.css'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

// Write your code here

class GithubPopularRepos extends Component {
  state = {reposeList: [], activeItem: 'ALL', loading: false}

  componentDidMount() {
    this.getReposData()
  }

  changeActiveItem = item => {
    this.setState({activeItem: item}, this.getReposData)
  }

  getReposData = async () => {
    const {activeItem} = this.state
    this.setState({loading: true})

    const responseData = await fetch(
      `https://apis.ccbp.in/popular-repos?language=${activeItem}`,
    )
    const data = await responseData.json()
    // console.log(data.popular_repos)
    const newData = data.popular_repos.map(eachItem => ({
      avatarUrl: eachItem.avatar_url,
      forksCount: eachItem.forks_count,
      id: eachItem.id,
      issuesCount: eachItem.issues_count,
      name: eachItem.name,
      starsCount: eachItem.stars_count,
    }))
    this.setState({reposeList: newData, loading: false})
  }

  render() {
    const {reposeList, loading} = this.state

    return (
      <div className="github-popular-bg-container">
        <h1 className="popular-repo-heading">Popular</h1>
        <ul className="language-items-container">
          {languageFiltersData.map(eachItem => (
            <LanguageFilterItem
              filterItemData={eachItem}
              key={eachItem.id}
              changeActiveItem={this.changeActiveItem}
            />
          ))}
        </ul>
        <ul className="repository-list-bg-container">
          {loading ? (
            <div data-testid="loader">
              <Loader type="ThreeDots" color="#0284c7" height={80} width={80} />
            </div>
          ) : (
            reposeList.map(eachRepo => (
              <RepositoryItem
                eachRepo={eachRepo}
                key={eachRepo.id}
                loading={loading}
              />
            ))
          )}
        </ul>
      </div>
    )
  }
}

export default GithubPopularRepos
