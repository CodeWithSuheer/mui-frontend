import { Helmet } from 'react-helmet-async';
// sections
import { FileManagerView } from 'src/sections/file-manager/view';

// ----------------------------------------------------------------------

export default function RestaurantDetails() {
    return (
        <>
            <Helmet>
                <title> Dashboard: Restaurant Details</title>
            </Helmet>

            <FileManagerView />
        </>
    );
}
