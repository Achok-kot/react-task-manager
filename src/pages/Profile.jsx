import PageHeader from "../components/PageHeader";
import UserCard from "../components/UserCard";

export default function Profile() {
    return (
        <div>
            <PageHeader title="Profile" />

            <UserCard />

            <section>
                <h2>Profile Summary</h2>

                <p>
                    Cristian Camilo is responsible for managing
                    project development and coordinating the
                    development team.
                </p>
            </section>
        </div>
    );
}