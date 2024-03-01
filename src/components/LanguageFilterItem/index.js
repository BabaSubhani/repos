import './index.css'

const languageFilterItem = props => {
  const {filterItemData, changeActiveItem} = props
  const {id, language} = filterItemData

  const changeItem = () => {
    changeActiveItem(id)
  }

  return (
    <li className="language-list-item">
      <button type="button" className="language-btn" onClick={changeItem}>
        {language}
      </button>
    </li>
  )
}

export default languageFilterItem
