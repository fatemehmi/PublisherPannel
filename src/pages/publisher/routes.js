// import
import Dashboard from "./views/Dashboard/Dashboard";
import ChargeWallet from "./views/Dashboard/ChargeWallet";
import Transaction from "./views/Dashboard/Transaction";
import Books from "./views/Dashboard/Books";
import Profile from "./views/Dashboard/Profile";

import {
	HomeIcon,
	CreditIcon,
	PersonIcon,
} from "./components/Publisher/Icons/Icons";

var dashRoutes = [
	{
		path: "/dashboard",
		name: "داشبورد",
		icon: <HomeIcon color="inherit" />,
		component: Dashboard,
		layout: "/admin",
	},
	{
		path: "/transaction",
		name: "تراکنشات اخیر",
		icon: <CreditIcon color="inherit" />,
		component: Transaction,
		layout: "/admin",
	},
	{
		path: "/chargeWallet",
		name: "شارژ کیف پول",
		icon: <CreditIcon color="inherit" />,
		component: ChargeWallet,
		layout: "/admin",
	},
	{
		path: "/books",
		name: "کتاب ها",
		icon: <HomeIcon color="inherit" />,
		component: Books,
		layout: "/admin",
	},
	{
		path: "/profile",
		name: "پروفایل",
		icon: <PersonIcon color="inherit" />,
		secondaryNavbar: true,
		component: Profile,
		layout: "/admin",
	},
];
export default dashRoutes;
