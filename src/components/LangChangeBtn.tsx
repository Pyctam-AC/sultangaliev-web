type Props = {
  handleLangChange: () => void;
  lang: string
}

const LangChangeBtn = ({handleLangChange, lang}: Props) => {
  return (
    <button
      className="lang-btn"
      onClick={handleLangChange}
    >
      <p>{lang}</p>
    </button>
  )
}

export default LangChangeBtn;
