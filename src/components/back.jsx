function BackSide(props) {
    const{word, transcription, translation} = props;
    return (
        <div className={styles.back}>
<div className='word'>${word}</div>
  <div className='transcription'>${transcription}</div>
  <div className="translation">${translation}</div>
</div>
    );
}
export default BackSide
