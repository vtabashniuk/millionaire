const PointMenu = ({ questions, points, id }) => {
  return (
    <>
      <ul>
        {questions.toReversed().map((item) => (
          <li
            key={item.amount}
            style={
              id === item.id
                ? { backgroundColor: "yellow" }
                : points >= item.amount
                ? { backgroundColor: "green" }
                : {}
            }
          >
            {item.amount}
          </li>
        ))}
      </ul>
    </>
  );
};

export default PointMenu;
