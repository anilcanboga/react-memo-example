import React from "react";

const Component1 = React.memo(({ statee }) => {
  console.log("Component1 Render Edildi");
  return (
    <div style={{ backgroundColor: "red" }}>
      Component1
      <br />
      {statee}
    </div>
  );
});

export default Component1;
