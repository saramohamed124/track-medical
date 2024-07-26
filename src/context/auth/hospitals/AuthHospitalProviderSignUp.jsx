import { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthHospitalProviderSignUp = ({ children }) => {
    const [nameAr, setNameAr] = useState("");
    const [nameEn, setNameEn] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [city, setCity] = useState("");
    const [description, setDescription] = useState("");
    const [googleMapLink, setGoogleMapLink] = useState("");

    const value = {
        nameAr, setNameAr,
        nameEn, setNameEn,
        email, setEmail,
        phone, setPhone,
        city, setCity,
        description, setDescription,
        googleMapLink, setGoogleMapLink
    };

    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
};

export default AuthHospitalProviderSignUp;
