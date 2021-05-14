import {
	faBars,
	faSignOutAlt,
	faEdit,
	faTimes,
	faShoppingBag,
	faPhone,
	faEnvelope,
	faMapMarkedAlt,
	faSearch,
	faUser,
    faHandPeace
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

const Icons = () => {
	return library.add(
		faBars,
		faSignOutAlt,
		faEdit,
		faTimes,
		faShoppingBag,
		faPhone,
		faEnvelope,
		faMapMarkedAlt,
		faSearch,
		faUser,
        faHandPeace
	);
};

export default Icons;
