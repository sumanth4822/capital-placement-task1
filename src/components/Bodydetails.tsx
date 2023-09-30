import { Checkbox, ConfigProvider } from "antd";

function Bodydetails() {
  return (
    <div className="right-body">
      <div className="body-comp">
        <div>
          <ConfigProvider
            theme={{
              components: {
                Checkbox: {
                  colorPrimary: "#ff4d4f",
                },
              },
            }}
          >
            <Checkbox></Checkbox>
          </ConfigProvider>
        </div>
        <div className="text-body">AS</div>
        <div className="body-main">
          <div className="textdeco1">Name</div>
          <div className="textdeco2">City,Country</div>
          <div className="textdeco3">Degree</div>
          <div className="textdeco4">#Hash-Tags</div>
          <div style={{ display: "flex" }}>
            <span className="textdeco5">New York</span> |
            <span className="textdeco5">Marketing</span> |
            <span className="textdeco5">London</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bodydetails;
