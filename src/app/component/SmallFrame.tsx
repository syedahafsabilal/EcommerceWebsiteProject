
import { ArrowUpDown } from "lucide-react" ; // Importing the ArrowUpDown icon from lucide-react

const SmallFrame = () => {
  return (
   <div
      style={{
        display: "flex",
        gap: "40px",
        justifyContent: "center",
        margin: "40px",
      }}
    >
      {/* Frame 1 */}
      <div
        style={{
          width: "500px",
          borderRadius: "15px",
          padding: "25px",
          boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.1)",
          background: "white",
          // textAlign: "center",
          transition: "transform 0.2s, box-shadow 0.2s",
          gap: '50px',
          height:'170px'
        }}
        onMouseOver={(e) =>
          (e.currentTarget.style.transform = "translateY(-5px)")
        }
        onMouseOut={(e) =>
          (e.currentTarget.style.transform = "translateY(0px)")
        }
      >
        <h1 style={{ fontSize: "22px", fontWeight: "bold", color: "#333" }}>
          Pick-Up
        </h1>
        <p style={{ fontSize: "16px", fontWeight: "500", color: "#666" }}>
          Locations
        </p>
        <div style={{ textAlign: "left", margin: "20px 0" , display:'flex' , gap:'50px' }}>
          <div>
          <p style={{ marginBottom: "5px", fontWeight: "bold" }}>City</p>
          <p style={{ margin: "5px 0", color: "#777" }}>Select your city</p>
          <hr style={{ border: "0", borderTop: "1px solid #ddd" }} />
          </div>
          <div>

          <p style={{ margin: "15px 0 5px", fontWeight: "bold" }}>Date</p>
          <p style={{ margin: "5px 0", color: "#777" }}>Select your date</p>
          <hr style={{ border: "0", borderTop: "1px solid #ddd" }} />
          </div>
          <div>

          <p style={{ margin: "15px 0 5px", fontWeight: "bold" }}>Time</p>
          <p style={{ margin: "5px 0", color: "#777" }}>Select your time</p>
        </div>
          </div>
      </div>

      {/* Arrow Frame */}
      <div
        style={{
          width: "80px",
          height: "80px",
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.1)",
          transition: "transform 0.2s, box-shadow 0.2s",
          cursor: "pointer",
          backgroundColor: '#3563E9',
         color:'white'
        }}
        onMouseOver={(e) =>
          (e.currentTarget.style.transform = "scale(1.1)")
        }
        onMouseOut={(e) =>
          (e.currentTarget.style.transform = "scale(1)")
        }
      >
        <ArrowUpDown size={40} color="white" />
      </div>

      {/* Frame 2 */}
     <div
        style={{
          width: "500px",
          borderRadius: "15px",
          padding: "25px",
          boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.1)",
          background: "white",
          // textAlign: "center",
          transition: "transform 0.2s, box-shadow 0.2s",
          gap: '50px',
          height:'170px'
        }}
        onMouseOver={(e) =>
          (e.currentTarget.style.transform = "translateY(-5px)")
        }
        onMouseOut={(e) =>
          (e.currentTarget.style.transform = "translateY(0px)")
        }
      >
        <h1 style={{ fontSize: "22px", fontWeight: "bold", color: "#333" }}>
          Drop-Off
        </h1>
        <p style={{ fontSize: "16px", fontWeight: "500", color: "#666" }}>
          Locations
        </p>
        <div style={{ textAlign: "left", margin: "20px 0" , display:'flex' , gap:'50px' }}>
          <div>
          <p style={{ marginBottom: "5px", fontWeight: "bold" }}>City</p>
          <p style={{ margin: "5px 0", color: "#777" }}>Select your city</p>
          <hr style={{ border: "0", borderTop: "1px solid #ddd" }} />
          </div>
          <div>

          <p style={{ margin: "15px 0 5px", fontWeight: "bold" }}>Date</p>
          <p style={{ margin: "5px 0", color: "#777" }}>Select your date</p>
          <hr style={{ border: "0", borderTop: "1px solid #ddd" }} />
          </div>
          <div>

          <p style={{ margin: "15px 0 5px", fontWeight: "bold" }}>Time</p>
          <p style={{ margin: "5px 0", color: "#777" }}>Select your time</p>
        </div>
          </div>
      </div>
    </div>
  );
};

export default SmallFrame;


