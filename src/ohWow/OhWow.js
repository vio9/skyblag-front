import Header from "../header/Header";
import { lazy, Suspense } from "react";
import "./wow-style.scss";
import Footer from "../footer/Footer";
import Loader from "../utils/loader/Loader";
import HandleScroll from "../utils/handlescroll/HandleScroll";
import UseFetch from "../utils/hook/UseFetch";

function OhWow() {
	const urlApiOhWow =process.env.REACT_APP_API_WOW;
	const { data, loading, error } = UseFetch(urlApiOhWow);
	const LazyImage = lazy(() => import("../utils/lazy/LazyImageGeneric"));
	const largeLoader = true;	

	console.log(data)
	let alphabeticalOrderData = data.sort((a,b) => a.title.localeCompare(b.title));

	return (
		<>
		<div className="oh-wow">
			<Header />
			<p className="wow-presentation">Des photos avec des titres ! WOW</p>
			{loading ? (
				<div className="waiting-wrapper"><Loader sizeLoader={largeLoader} /></div>
			) : (
				<div className="wow-imgs-container">
					{alphabeticalOrderData.map((item) => (
						<>
							<div className="wow-container">
								<h2 className="wow-title" key={item.id}>
									{item.title}
								</h2>
								<Suspense fallback={<Loader />}>
									<LazyImage
										src={item.image}
										alt="paysages"
										className="wow-image"
									/>
								</Suspense>
							</div>
						</>
					))}
				</div>
			)}

			
			<HandleScroll />
		</div>
		<Footer />
		</>
	);
}

export default OhWow;
