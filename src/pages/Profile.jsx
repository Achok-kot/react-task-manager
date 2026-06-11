import PageHearder from "../components/PageHearder";
import UserCard from "../components/UserCard";

export default function Profile() {
    return (
        <div>
            <PageHeader title="Profile" />

            <UserCard />

            <section>
                <h2>Profile Summary</h2>

                <p>
                    Panom Achok is a student who is being coached
                    Christian Camilo in codeCamp academy at
                    prime.teck.
                </p>
            </section>
        </div>
    );
}