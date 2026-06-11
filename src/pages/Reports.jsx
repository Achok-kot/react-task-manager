import PageHeader from "../components/PageHeader";
import DashboardStats from "../components/DashboardStats";

export default function Reports() {
    return (
        <div>
            <PageHeader title="Reports" />

            <DashboardStats />

            <section>
                <h2>Productivity Summary</h2>

                <p>
                    The team completed 75% of all assigned
                    tasks during the current sprint.
                </p>
            </section>
        </div>
    );
}