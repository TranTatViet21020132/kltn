import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { HOME_ROUTE } from "@/config/path-consts";

const VerifyPage = () => {
  const navigate = useNavigate();
  const { verify2FACode } = useAuth();
  const [code, setCode] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const isValid = await verify2FACode(code);
    if (isValid) {
      navigate(`${HOME_ROUTE}`);
    } else {
      alert("Invalid code. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type= "text"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder= "Enter verification code"
      />
      <button type="submit">Verify</button>
    </form>
  );
};

export default VerifyPage;