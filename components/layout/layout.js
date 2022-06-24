import Navbar from "../navbar/navbar";

export default function Layout(props) {
    const {children} = props;
    return (
        <>
            <Navbar/>
            <main>{children}</main>
        </>
    );
}