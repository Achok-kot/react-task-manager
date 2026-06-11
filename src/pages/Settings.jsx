import PageHeader from "../components/PageHeader";

export default function Settings() {
    return (
        <div>
            <PageHeader title="Settings" />

            <section>
                <h2>Theme Settings</h2>

                <p>Current Theme: Light Mode</p>
            </section>

            <section>
                <h2>Notification Settings</h2>

                <p>Email Notifications: Enabled</p>
            </section>

            <section>
                <h2>Account Settings</h2>

                <p>Password Management</p>

                <p>Privacy Preferences</p>
            </section>
        </div>
    );
}