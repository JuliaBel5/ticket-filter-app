import TurkishAirlinesLogo from "../assets/turkishAirlines.png";
import S7Logo from "../assets/S7Logo.svg";
import AeroflotLogo from "../assets/AeroflotLogo.svg";
import BritishAirwaysLogo from "../assets/BritishAirwaysLogo.svg";

const airlineLogos = new Map<string, string>([
  ["TK", TurkishAirlinesLogo],
  ["S7", S7Logo],
  ["SU", AeroflotLogo],
  ["BA", BritishAirwaysLogo],
]);

const getAirlineLogo = (carrier: string) => airlineLogos.get(carrier) || null;

export default getAirlineLogo;
