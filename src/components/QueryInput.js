import '../less/query-input';

export default ({onQueryChange}) => {
    return (
      <div className="row query-input">
        <input className="inpt"
          onChange={ e => { onQueryChange(e.target.value) }}
        >
        </input>
      </div>
    )
};
