import SignInForm from '@/Admin/Utils/components/auth/SignInForm';
import { PageMeta } from '@/Admin/Utils/components/common/PageMeta';

export default function Login() {
    return (
        <>
            <PageMeta
                title="Pakil Tourism Information and Engagement System"
                description="Explore Pakil's tourism attractions, events, and engage with the local community through our interactive information platform."
            />
            <SignInForm />
        </>
    );
}
