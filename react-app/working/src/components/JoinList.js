import JoinListItem from "./JoinListItem";

const JoinList = ({ joins, onRemove, onUpdateForm }) => {
  return (
    <div className="JoinList">
      {joins.map((join, index) => (
        <JoinListItem
          join={join}
          idx={index}    //onupdate할 때 사용됨.
          onRemove={onRemove}
          onUpdateForm={onUpdateForm}
        />
      ))}
    </div>
  );
};

export default JoinList;
