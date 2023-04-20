import { classNames } from "shared/lib/ClassNames/ClassNames";
import { memo } from "react";
import { useParams } from "react-router-dom";
import { EditableProfileCard } from "features/EditableProfileCard";
import { VStack } from "shared/ui/Stack";
import { Page } from "widgets/Page";

interface ProfilePageProps {
    className?: string;
}

const ProfilePage = memo(({ className }: ProfilePageProps) => {

    const { id } = useParams<{ id: string }>();

    return (
        <Page className={classNames("", [className])}>
            <VStack gap="16" max>
                <EditableProfileCard id={id} />
            </VStack>
        </Page>
    );
});

export default ProfilePage;
