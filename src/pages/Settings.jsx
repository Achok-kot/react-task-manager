import PageHearder from "../components/PageHearder";

export default function Settings() {
    return (
        <div>
            <PageHeader title="Settings" />

            <section>
                <h2>Theme Settings</h2>

                <p>Current Theme is black Mode</p>
            </section>

            <section>
                <h2>Notification Settings</h2>

                <p>Disabled</p>
            </section>

            <section>
                <h2>Account Settings</h2>

                <p>Public</p>
            </section>
        </div>
    );
}