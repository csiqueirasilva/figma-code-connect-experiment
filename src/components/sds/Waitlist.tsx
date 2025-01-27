import { Footer, Header, Hero } from "compositions";
import { Button, Form, Input, TextContentTitle } from "primitives";

import "@/../node_modules/sds/src/index.css";

export default function Waitlist() {
    return (
        <div
            style={{
            display: "flex",
            width: "var(--sds-responsive-device-width)",
            flexDirection: "column",
            alignItems: "flex-start",
            background: "var(--sds-color-background-default-default)"      
          }} 
        >
            <Header />
            <Hero variant="subtle" style={{
                paddingTop: "var(--sds-size-space-4000)",
                paddingBottom: "var(--sds-size-space-4000)"
            }}>
                <TextContentTitle
                    align="center"
                    title="Title"
                    subtitle="Subtitle"
                />
                    <Form style={{
                        marginTop: "var(--sds-size-space-800)"
                    }}
                        singleLine onSubmit={() => {}}>
                        <Input value="you@example.com" />
                        <Button
                            onPress={() => {}}
                            variant="primary"
                            >Submit</Button>
                    </Form>
            </Hero>
            <Footer />
        </div>
    )
}