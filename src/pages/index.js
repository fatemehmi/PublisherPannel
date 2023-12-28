import Image from "next/image";
import { Inter } from "next/font/google";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
// import PDFViewer from "@/components/PDFViewer";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	const token = Cookies.get("token");
	const { reload } = useRouter();
	return (
		<main
			className={`flex min-h-screen flex-col items-center justify-between p-24`}
		>
			<div>
				{/* {token?<button onClick={()=>{
            Cookies.remove('token')
            reload()}}>Logout</button>:""} */}
				{/* <PDFViewer/> */}
			</div>
		</main>
	);
}
