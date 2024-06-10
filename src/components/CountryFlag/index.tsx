import React from "react";
import { apiGetCountryFlag } from "../../api/apiGetCountryFlag";
import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { Country } from "../../api/types";

interface CountryFlagProps {
  country: Country;
}

const CountryFlag: React.FC<CountryFlagProps> = ({ country }) => {
  const [flagUrl, setFlagUrl] = useState<string>("");

  useEffect(() => {
    const fetchFlag = async () => {
      try {
        const flag = await apiGetCountryFlag(country?.code);
        setFlagUrl(flag);
      } catch (error) {
        console.error(`Error fetching flag for ${country}: ${error}`);
      }
    };
    fetchFlag();
  }, [country?.code]);

  return flagUrl ? (
    <div className={styles.flag}>
      <img
        src={flagUrl}
        alt={`${country?.code} flag`}
        className={styles.flagImage}
      />
    </div>
  ) : null;
};

export default CountryFlag;
