  import React from "react";
  import { Heart } from "lucide-react"; // Import the heart icon from lucide-react
  import { FaGasPump, FaUser } from 'react-icons/fa'; // Import the gas pump icon
  import Icon from "./Icon"; // Assuming the Icon component is cust
  import { FaUsers } from 'react-icons/fa';


  const CarFrame = () => {
    // Array of image data for the gallery (replace these with your actual image URLs and data)
    const images = [
      {
        src: "/CarImage9.png",
        title: <strong>MG ZX Exclusive</strong>,
        subTitle: "Hatchback",
        liters: "70L", // Different liters
        persons: 4,
        content: (
          <div
  style={{
    textAlign: "center",
    maxWidth: "350px",
    margin: "20px auto",
    padding: "20px",
    borderRadius: "15px",
    backgroundColor: "#ffffff",
    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
    fontFamily: "'Plus Jakarta Sans', sans-serif",
  }}
>
  {/* Image Section */}
  <img
    src="/CarImage11.png"
    alt="Car"
    style={{
      width: "100%",
      height: "auto",
      borderRadius: "12px",
      marginBottom: "15px",
      objectFit: "cover",
    }}
  />

  {/* Gas Station Icon, Fuel, and Manual Info */}
  <div
    style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      fontSize: "16px",
      color: "#4F4F4F",
      marginBottom: "10px",
    }}
  >
    <div style={{ display: "flex", alignItems: "center" }}>
      <FaGasPump style={{ marginRight: "8px", color: "#3563E9", fontSize: "18px" }} />
      <span>90L</span>
    </div>
    <span
      style={{
        backgroundColor: "#F0F3F6",
        padding: "5px 10px",
        borderRadius: "5px",
        fontWeight: "600",
        fontSize: "14px",
      }}
    >
      Manual
    </span>
    <div style={{ display: "flex", alignItems: "center" }}>
      <FaUsers style={{ marginRight: "5px", color: "#90A3BF", fontSize: "20px" }} />
      <span>4 Persons</span>
    </div>
  </div>

  {/* Price and Rent Now Button */}
  <div
    style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: "10px",
    }}
  >
    {/* Price */}
    <p
      style={{
        fontSize: "22px",
        fontWeight: "bold",
        color: "#212121",
        margin: 0,
      }}
    >
      $74.00
      <span style={{ fontSize: "16px", fontWeight: "400", color: "#7D7D7D" }}> / day</span>
    </p>

    {/* Rent Now Button */}
    <button
      style={{
        backgroundColor: "#3563E9",
        color: "#fff",
        padding: "10px 20px",
        borderRadius: "8px",
        border: "none",
        cursor: "pointer",
        fontWeight: "600",
        fontSize: "16px",
        transition: "all 0.3s",
      }}
      onMouseEnter={(e) => (e.target.style.backgroundColor = "#274ABA")}
      onMouseLeave={(e) => (e.target.style.backgroundColor = "#3563E9")}
    >
      Rent Now
    </button>
  </div>
</div>

        ),
      },
      {
        src: "/CarImage9.png",
        title: <strong>MG ZX Exclusive</strong>,
        subTitle: "Hatchback",
        liters: "70L", // Different liters
        persons: 4,
        content: (
          <div
  style={{
    textAlign: "center",
    maxWidth: "350px",
    margin: "20px auto",
    padding: "20px",
    borderRadius: "15px",
    backgroundColor: "#ffffff",
    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
    fontFamily: "'Plus Jakarta Sans', sans-serif",
  }}
>
  {/* Image Section */}
  <img
    src="/CarImage11.png"
    alt="Car"
    style={{
      width: "100%",
      height: "auto",
      borderRadius: "12px",
      marginBottom: "15px",
      objectFit: "cover",
    }}
  />

  {/* Gas Station Icon, Fuel, and Manual Info */}
  <div
    style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      fontSize: "16px",
      color: "#4F4F4F",
      marginBottom: "10px",
    }}
  >
    <div style={{ display: "flex", alignItems: "center" }}>
      <FaGasPump style={{ marginRight: "8px", color: "#3563E9", fontSize: "18px" }} />
      <span>90L</span>
    </div>
    <span
      style={{
        backgroundColor: "#F0F3F6",
        padding: "5px 10px",
        borderRadius: "5px",
        fontWeight: "600",
        fontSize: "14px",
      }}
    >
      Manual
    </span>
    <div style={{ display: "flex", alignItems: "center" }}>
      <FaUsers style={{ marginRight: "5px", color: "#90A3BF", fontSize: "20px" }} />
      <span>4 Persons</span>
    </div>
  </div>

  {/* Price and Rent Now Button */}
  <div
    style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: "10px",
    }}
  >
    {/* Price */}
    <p
      style={{
        fontSize: "22px",
        fontWeight: "bold",
        color: "#212121",
        margin: 0,
      }}
    >
      $74.00
      <span style={{ fontSize: "16px", fontWeight: "400", color: "#7D7D7D" }}> / day</span>
    </p>

    {/* Rent Now Button */}
    <button
      style={{
        backgroundColor: "#3563E9",
        color: "#fff",
        padding: "10px 20px",
        borderRadius: "8px",
        border: "none",
        cursor: "pointer",
        fontWeight: "600",
        fontSize: "16px",
        transition: "all 0.3s",
      }}
      onMouseEnter={(e) => (e.target.style.backgroundColor = "#274ABA")}
      onMouseLeave={(e) => (e.target.style.backgroundColor = "#3563E9")}
    >
      Rent Now
    </button>
  </div>
</div>

        ),
      },
      {
        src: "/CarImage9.png",
        title: <strong>MG ZX Exclusive</strong>,
        subTitle: "Hatchback",
        liters: "70L", // Different liters
        persons: 4,
        content: (
          <div
  style={{
    textAlign: "center",
    maxWidth: "350px",
    margin: "20px auto",
    padding: "20px",
    borderRadius: "15px",
    backgroundColor: "#ffffff",
    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
    fontFamily: "'Plus Jakarta Sans', sans-serif",
  }}
>
  {/* Image Section */}
  <img
    src="/CarImage11.png"
    alt="Car"
    style={{
      width: "100%",
      height: "auto",
      borderRadius: "12px",
      marginBottom: "15px",
      objectFit: "cover",
    }}
  />

  {/* Gas Station Icon, Fuel, and Manual Info */}
  <div
    style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      fontSize: "16px",
      color: "#4F4F4F",
      marginBottom: "10px",
    }}
  >
    <div style={{ display: "flex", alignItems: "center" }}>
      <FaGasPump style={{ marginRight: "8px", color: "#3563E9", fontSize: "18px" }} />
      <span>90L</span>
    </div>
    <span
      style={{
        backgroundColor: "#F0F3F6",
        padding: "5px 10px",
        borderRadius: "5px",
        fontWeight: "600",
        fontSize: "14px",
      }}
    >
      Manual
    </span>
    <div style={{ display: "flex", alignItems: "center" }}>
      <FaUsers style={{ marginRight: "5px", color: "#90A3BF", fontSize: "20px" }} />
      <span>4 Persons</span>
    </div>
  </div>

  {/* Price and Rent Now Button */}
  <div
    style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: "10px",
    }}
  >
    {/* Price */}
    <p
      style={{
        fontSize: "22px",
        fontWeight: "bold",
        color: "#212121",
        margin: 0,
      }}
    >
      $74.00
      <span style={{ fontSize: "16px", fontWeight: "400", color: "#7D7D7D" }}> / day</span>
    </p>

    {/* Rent Now Button */}
    <button
      style={{
        backgroundColor: "#3563E9",
        color: "#fff",
        padding: "10px 20px",
        borderRadius: "8px",
        border: "none",
        cursor: "pointer",
        fontWeight: "600",
        fontSize: "16px",
        transition: "all 0.3s",
      }}
      onMouseEnter={(e) => (e.target.style.backgroundColor = "#274ABA")}
      onMouseLeave={(e) => (e.target.style.backgroundColor = "#3563E9")}
    >
      Rent Now
    </button>
  </div>
</div>

        ),
      },
      {
        src: "/CarImage9.png",
        title: <strong>MG ZX Exclusive</strong>,
        subTitle: "Hatchback",
        liters: "70L", // Different liters
        persons: 4,
        content: (
          <div
  style={{
    textAlign: "center",
    maxWidth: "350px",
    margin: "20px auto",
    padding: "20px",
    borderRadius: "15px",
    backgroundColor: "#ffffff",
    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
    fontFamily: "'Plus Jakarta Sans', sans-serif",
  }}
>
  {/* Image Section */}
  <img
    src="/CarImage11.png"
    alt="Car"
    style={{
      width: "100%",
      height: "auto",
      borderRadius: "12px",
      marginBottom: "15px",
      objectFit: "cover",
    }}
  />

  {/* Gas Station Icon, Fuel, and Manual Info */}
  <div
    style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      fontSize: "16px",
      color: "#4F4F4F",
      marginBottom: "10px",
    }}
  >
    <div style={{ display: "flex", alignItems: "center" }}>
      <FaGasPump style={{ marginRight: "8px", color: "#3563E9", fontSize: "18px" }} />
      <span>90L</span>
    </div>
    <span
      style={{
        backgroundColor: "#F0F3F6",
        padding: "5px 10px",
        borderRadius: "5px",
        fontWeight: "600",
        fontSize: "14px",
      }}
    >
      Manual
    </span>
    <div style={{ display: "flex", alignItems: "center" }}>
      <FaUsers style={{ marginRight: "5px", color: "#90A3BF", fontSize: "20px" }} />
      <span>4 Persons</span>
    </div>
  </div>

  {/* Price and Rent Now Button */}
  <div
    style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: "10px",
    }}
  >
    {/* Price */}
    <p
      style={{
        fontSize: "22px",
        fontWeight: "bold",
        color: "#212121",
        margin: 0,
      }}
    >
      $74.00
      <span style={{ fontSize: "16px", fontWeight: "400", color: "#7D7D7D" }}> / day</span>
    </p>

    {/* Rent Now Button */}
    <button
      style={{
        backgroundColor: "#3563E9",
        color: "#fff",
        padding: "10px 20px",
        borderRadius: "8px",
        border: "none",
        cursor: "pointer",
        fontWeight: "600",
        fontSize: "16px",
        transition: "all 0.3s",
      }}
      onMouseEnter={(e) => (e.target.style.backgroundColor = "#274ABA")}
      onMouseLeave={(e) => (e.target.style.backgroundColor = "#3563E9")}
    >
      Rent Now
    </button>
  </div>
</div>

        ),
      },
      {
        src: "/CarImage9.png",
        title: <strong>MG ZX Exclusive</strong>,
        subTitle: "Hatchback",
        liters: "70L", // Different liters
        persons: 4,
        content: (
          <div
  style={{
    textAlign: "center",
    maxWidth: "350px",
    margin: "20px auto",
    padding: "20px",
    borderRadius: "15px",
    backgroundColor: "#ffffff",
    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
    fontFamily: "'Plus Jakarta Sans', sans-serif",
  }}
>
  {/* Image Section */}
  <img
    src="/CarImage11.png"
    alt="Car"
    style={{
      width: "100%",
      height: "auto",
      borderRadius: "12px",
      marginBottom: "15px",
      objectFit: "cover",
    }}
  />

  {/* Gas Station Icon, Fuel, and Manual Info */}
  <div
    style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      fontSize: "16px",
      color: "#4F4F4F",
      marginBottom: "10px",
    }}
  >
    <div style={{ display: "flex", alignItems: "center" }}>
      <FaGasPump style={{ marginRight: "8px", color: "#3563E9", fontSize: "18px" }} />
      <span>90L</span>
    </div>
    <span
      style={{
        backgroundColor: "#F0F3F6",
        padding: "5px 10px",
        borderRadius: "5px",
        fontWeight: "600",
        fontSize: "14px",
      }}
    >
      Manual
    </span>
    <div style={{ display: "flex", alignItems: "center" }}>
      <FaUsers style={{ marginRight: "5px", color: "#90A3BF", fontSize: "20px" }} />
      <span>4 Persons</span>
    </div>
  </div>

  {/* Price and Rent Now Button */}
  <div
    style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: "10px",
    }}
  >
    {/* Price */}
    <p
      style={{
        fontSize: "22px",
        fontWeight: "bold",
        color: "#212121",
        margin: 0,
      }}
    >
      $74.00
      <span style={{ fontSize: "16px", fontWeight: "400", color: "#7D7D7D" }}> / day</span>
    </p>

    {/* Rent Now Button */}
    <button
      style={{
        backgroundColor: "#3563E9",
        color: "#fff",
        padding: "10px 20px",
        borderRadius: "8px",
        border: "none",
        cursor: "pointer",
        fontWeight: "600",
        fontSize: "16px",
        transition: "all 0.3s",
      }}
      onMouseEnter={(e) => (e.target.style.backgroundColor = "#274ABA")}
      onMouseLeave={(e) => (e.target.style.backgroundColor = "#3563E9")}
    >
      Rent Now
    </button>
  </div>
</div>

        ),
      },
      {
        src: "/CarImage9.png",
        title: <strong>MG ZX Exclusive</strong>,
        subTitle: "Hatchback",
        liters: "70L", // Different liters
        persons: 4,
        content: (
          <div
  style={{
    textAlign: "center",
    maxWidth: "350px",
    margin: "20px auto",
    padding: "20px",
    borderRadius: "15px",
    backgroundColor: "#ffffff",
    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
    fontFamily: "'Plus Jakarta Sans', sans-serif",
  }}
>
  {/* Image Section */}
  <img
    src="/CarImage11.png"
    alt="Car"
    style={{
      width: "100%",
      height: "auto",
      borderRadius: "12px",
      marginBottom: "15px",
      objectFit: "cover",
    }}
  />

  {/* Gas Station Icon, Fuel, and Manual Info */}
  <div
    style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      fontSize: "16px",
      color: "#4F4F4F",
      marginBottom: "10px",
    }}
  >
    <div style={{ display: "flex", alignItems: "center" }}>
      <FaGasPump style={{ marginRight: "8px", color: "#3563E9", fontSize: "18px" }} />
      <span>90L</span>
    </div>
    <span
      style={{
        backgroundColor: "#F0F3F6",
        padding: "5px 10px",
        borderRadius: "5px",
        fontWeight: "600",
        fontSize: "14px",
      }}
    >
      Manual
    </span>
    <div style={{ display: "flex", alignItems: "center" }}>
      <FaUsers style={{ marginRight: "5px", color: "#90A3BF", fontSize: "20px" }} />
      <span>4 Persons</span>
    </div>
  </div>

  {/* Price and Rent Now Button */}
  <div
    style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: "10px",
    }}
  >
    {/* Price */}
    <p
      style={{
        fontSize: "22px",
        fontWeight: "bold",
        color: "#212121",
        margin: 0,
      }}
    >
      $74.00
      <span style={{ fontSize: "16px", fontWeight: "400", color: "#7D7D7D" }}> / day</span>
    </p>

    {/* Rent Now Button */}
    <button
      style={{
        backgroundColor: "#3563E9",
        color: "#fff",
        padding: "10px 20px",
        borderRadius: "8px",
        border: "none",
        cursor: "pointer",
        fontWeight: "600",
        fontSize: "16px",
        transition: "all 0.3s",
      }}
      onMouseEnter={(e) => (e.target.style.backgroundColor = "#274ABA")}
      onMouseLeave={(e) => (e.target.style.backgroundColor = "#3563E9")}
    >
      Rent Now
    </button>
  </div>
</div>

        ),
      },
      {
        src: "/CarImage9.png",
        title: <strong>MG ZX Exclusive</strong>,
        subTitle: "Hatchback",
        liters: "70L", // Different liters
        persons: 4,
        content: (
          <div
  style={{
    textAlign: "center",
    maxWidth: "350px",
    margin: "20px auto",
    padding: "20px",
    borderRadius: "15px",
    backgroundColor: "#ffffff",
    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
    fontFamily: "'Plus Jakarta Sans', sans-serif",
  }}
>
  {/* Image Section */}
  <img
    src="/CarImage11.png"
    alt="Car"
    style={{
      width: "100%",
      height: "auto",
      borderRadius: "12px",
      marginBottom: "15px",
      objectFit: "cover",
    }}
  />

  {/* Gas Station Icon, Fuel, and Manual Info */}
  <div
    style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      fontSize: "16px",
      color: "#4F4F4F",
      marginBottom: "10px",
    }}
  >
    <div style={{ display: "flex", alignItems: "center" }}>
      <FaGasPump style={{ marginRight: "8px", color: "#3563E9", fontSize: "18px" }} />
      <span>90L</span>
    </div>
    <span
      style={{
        backgroundColor: "#F0F3F6",
        padding: "5px 10px",
        borderRadius: "5px",
        fontWeight: "600",
        fontSize: "14px",
      }}
    >
      Manual
    </span>
    <div style={{ display: "flex", alignItems: "center" }}>
      <FaUsers style={{ marginRight: "5px", color: "#90A3BF", fontSize: "20px" }} />
      <span>4 Persons</span>
    </div>
  </div>

  {/* Price and Rent Now Button */}
  <div
    style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: "10px",
    }}
  >
    {/* Price */}
    <p
      style={{
        fontSize: "22px",
        fontWeight: "bold",
        color: "#212121",
        margin: 0,
      }}
    >
      $74.00
      <span style={{ fontSize: "16px", fontWeight: "400", color: "#7D7D7D" }}> / day</span>
    </p>

    {/* Rent Now Button */}
    <button
      style={{
        backgroundColor: "#3563E9",
        color: "#fff",
        padding: "10px 20px",
        borderRadius: "8px",
        border: "none",
        cursor: "pointer",
        fontWeight: "600",
        fontSize: "16px",
        transition: "all 0.3s",
      }}
      onMouseEnter={(e) => (e.target.style.backgroundColor = "#274ABA")}
      onMouseLeave={(e) => (e.target.style.backgroundColor = "#3563E9")}
    >
      Rent Now
    </button>
  </div>
</div>

        ),
      },
      {
        src: "/CarImage9.png",
        title: <strong>MG ZX Exclusive</strong>,
        subTitle: "Hatchback",
        liters: "70L", // Different liters
        persons: 4,
        content: (
          <div
  style={{
    textAlign: "center",
    maxWidth: "350px",
    margin: "20px auto",
    padding: "20px",
    borderRadius: "15px",
    backgroundColor: "#ffffff",
    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
    fontFamily: "'Plus Jakarta Sans', sans-serif",
  }}
>
  {/* Image Section */}
  <img
    src="/CarImage11.png"
    alt="Car"
    style={{
      width: "100%",
      height: "auto",
      borderRadius: "12px",
      marginBottom: "15px",
      objectFit: "cover",
    }}
  />

  {/* Gas Station Icon, Fuel, and Manual Info */}
  <div
    style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      fontSize: "16px",
      color: "#4F4F4F",
      marginBottom: "10px",
    }}
  >
    <div style={{ display: "flex", alignItems: "center" }}>
      <FaGasPump style={{ marginRight: "8px", color: "#3563E9", fontSize: "18px" }} />
      <span>90L</span>
    </div>
    <span
      style={{
        backgroundColor: "#F0F3F6",
        padding: "5px 10px",
        borderRadius: "5px",
        fontWeight: "600",
        fontSize: "14px",
      }}
    >
      Manual
    </span>
    <div style={{ display: "flex", alignItems: "center" }}>
      <FaUsers style={{ marginRight: "5px", color: "#90A3BF", fontSize: "20px" }} />
      <span>4 Persons</span>
    </div>
  </div>

  {/* Price and Rent Now Button */}
  <div
    style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: "10px",
    }}
  >
    {/* Price */}
    <p
      style={{
        fontSize: "22px",
        fontWeight: "bold",
        color: "#212121",
        margin: 0,
      }}
    >
      $74.00
      <span style={{ fontSize: "16px", fontWeight: "400", color: "#7D7D7D" }}> / day</span>
    </p>

    {/* Rent Now Button */}
    <button
      style={{
        backgroundColor: "#3563E9",
        color: "#fff",
        padding: "10px 20px",
        borderRadius: "8px",
        border: "none",
        cursor: "pointer",
        fontWeight: "600",
        fontSize: "16px",
        transition: "all 0.3s",
      }}
      onMouseEnter={(e) => (e.target.style.backgroundColor = "#274ABA")}
      onMouseLeave={(e) => (e.target.style.backgroundColor = "#3563E9")}
    >
      Rent Now
    </button>
  </div>
</div>

        ),
      },
   
    ];

    return (
      <div style={{ textAlign: "center", margin: "50px" }}>
      {/* Section Heading */}
      <h2
        style={{
          fontSize: "36px",
          fontWeight: "bold",
          color: "#333",
          marginBottom: "30px",
          fontFamily: "'Poppins', sans-serif",
        }}
      >
        Popular Car
      </h2>

      {/* Car Card */}
   

      {/* Image Gallery */}
      <div
        style={{
          // display: "grid",
          // gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
          gap: "20px",
          // marginTop: "50px",
            // padding: "20px",
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap:'wrap',
            // backgroundColor:'light'
          
        }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            style={{
              borderRadius: "10px",
              overflow: "hidden",
              // boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)",
            }}
          >
            {image.content}
          </div>
        ))}
      </div>
    </div>
    );
  };

  export default CarFrame;

