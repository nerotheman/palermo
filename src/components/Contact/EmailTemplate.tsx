interface ContactFormEmailProps {
  name: string;
  email: string;
  message: string;
}

const ContactFormEmail: React.FC<Readonly<ContactFormEmailProps>> = ({
  name,
  email,
  message,
}) => (
  <div
    style={{
      fontFamily: "system-ui, -apple-system, sans-serif",
      color: "#09090B",
      maxWidth: "600px",
      margin: "0 auto",
    }}
  >
    {/* Header */}
    <div
      style={{
        backgroundColor: "#EEDFD4",
        padding: "40px 30px",
        textAlign: "center",
        borderBottom: "1px solid #E4E4E7",
      }}
    >
      <div style={{ 
        fontSize: "20px", 
        fontWeight: "600", 
        color: "#09090B",
        marginBottom: "24px",
        letterSpacing: "-0.025em"
      }}>
        PALERMO UPPSALA
      </div>
      <h1
        style={{
          color: "#09090B",
          margin: 0,
          fontSize: "24px",
          fontWeight: "600",
          letterSpacing: "-0.025em",
        }}
      >
        Tack för ditt meddelande!
      </h1>
    </div>

    {/* Content */}
    <div style={{ backgroundColor: "#FFFFFF", padding: "32px" }}>
      {/* Greeting */}
      <div style={{ marginBottom: "24px" }}>
        <p
          style={{
            color: "#18181B",
            fontSize: "16px",
            lineHeight: "1.5",
            margin: "0 0 16px 0",
          }}
        >
          Hej {name},
        </p>
        <p
          style={{
            color: "#18181B",
            fontSize: "16px",
            lineHeight: "1.5",
            margin: 0,
          }}
        >
          Vi har tagit emot ditt meddelande och kommer att svara dig så snart
          som möjligt, vanligtvis inom 24 timmar.
        </p>
      </div>

      {/* Info box */}
      <div
        style={{
          backgroundColor: "#FEF3C7",
          border: "1px solid #FDE68A",
          borderRadius: "8px",
          padding: "16px",
          marginBottom: "32px",
        }}
      >
        <p
          style={{
            color: "#92400E",
            fontSize: "14px",
            margin: 0,
            fontWeight: "500",
          }}
        >
          🍕 Behöver du snabb hjälp? Ring oss direkt på <a href="tel:+4618131820" style={{ color: "#92400E", fontWeight: "600" }}>018-13 18 20</a>
        </p>
      </div>

      {/* Message copy */}
      <div>
        <h2
          style={{
            color: "#09090B",
            fontSize: "18px",
            fontWeight: "600",
            marginTop: 0,
            marginBottom: "16px",
            letterSpacing: "-0.025em",
          }}
        >
          Ditt meddelande:
        </h2>
        <div
          style={{
            color: "#18181B",
            lineHeight: "1.625",
            whiteSpace: "pre-wrap",
            backgroundColor: "#F4F4F5",
            padding: "20px",
            borderRadius: "8px",
            border: "1px solid #E4E4E7",
            fontSize: "15px",
          }}
        >
          {message}
        </div>
      </div>

      {/* Contact info */}
      <div
        style={{
          marginTop: "32px",
          paddingTop: "32px",
          borderTop: "1px solid #E4E4E7",
        }}
      >
        <h3
          style={{
            color: "#09090B",
            fontSize: "16px",
            fontWeight: "600",
            margin: "0 0 16px 0",
            letterSpacing: "-0.025em",
          }}
        >
          Våra kontaktuppgifter:
        </h3>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <tr>
            <td
              style={{
                padding: "8px 0",
                color: "#71717A",
                fontSize: "14px",
                width: "120px",
              }}
            >
              📍 Adress:
            </td>
            <td
              style={{ padding: "8px 0", color: "#09090B", fontSize: "14px" }}
            >
              <a href="https://maps.google.com/?q=Sysslomansgatan+7,+Uppsala" style={{ color: "#09090B", textDecoration: "none" }}>
                Sysslomansgatan 7, Uppsala
              </a>
            </td>
          </tr>
          <tr>
            <td
              style={{ padding: "8px 0", color: "#71717A", fontSize: "14px" }}
            >
              📞 Telefon:
            </td>
            <td
              style={{ padding: "8px 0", color: "#09090B", fontSize: "14px" }}
            >
              <a href="tel:+4618131820" style={{ color: "#09090B", textDecoration: "none" }}>
                018-13 18 20
              </a>
            </td>
          </tr>
          <tr>
            <td
              style={{
                padding: "8px 0",
                color: "#71717A",
                fontSize: "14px",
                verticalAlign: "top",
              }}
            >
              🕐 Öppettider:
            </td>
            <td
              style={{ padding: "8px 0", color: "#09090B", fontSize: "14px" }}
            >
              <div style={{ lineHeight: "1.5" }}>
                <strong>Måndag:</strong> 11:00 - 01:00
                <br />
                <strong>Tis-Fre:</strong> 11:00 - 03:00
                <br />
                <strong>Lördag:</strong> 12:00 - 03:00
                <br />
                <strong>Söndag:</strong> 12:00 - 01:00
                <br />
                <div
                  style={{
                    marginTop: "8px",
                    paddingTop: "8px",
                    borderTop: "1px solid #E4E4E7",
                  }}
                >
                  <strong>Lunch vardagar:</strong> 11:00 - 15:00
                  <br />
                  <span style={{ fontSize: "13px", color: "#71717A" }}>
                    119 kr inkl. sallad, bröd & kaffe
                  </span>
                </div>
              </div>
            </td>
          </tr>
        </table>
      </div>
    </div>

    {/* Footer */}
    <div
      style={{
        backgroundColor: "#EEDFD4",
        color: "#52525B",
        padding: "24px",
        textAlign: "center",
        fontSize: "13px",
        lineHeight: "1.5",
      }}
    >
      <p style={{ margin: "0 0 12px 0", color: "#18181B", fontWeight: "500" }}>
        Vi ses snart på Palermo! 🍕
      </p>
      <p style={{ margin: "0", fontSize: "12px", color: "#52525B" }}>
        <a
          href="https://www.palermo-uppsala.se"
          style={{ color: "#18181B", textDecoration: "underline", textUnderlineOffset: "2px" }}
        >
          www.palermo-uppsala.se
        </a>
      </p>
    </div>
  </div>
);

export default ContactFormEmail;
