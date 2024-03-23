import About from "@/components/content/about";
import ContactPerson from "@/components/content/contact";
import HomeMenu from "@/components/content/home";
import FooterMenu from "@/components/footer";
import Headers from "@/components/headers";

export default function Home() {
    return (
        <main className="items-center">
            <Headers />
            <About />
            <FooterMenu />
        </main>
    );
}
