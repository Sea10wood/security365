/* eslint-disable jsx-a11y/anchor-is-valid */
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";

export default function Links() {
    return (
        <Box
            sx={{
                typography: "body1",
                "& > :not(style) ~ :not(style)": {
                    ml: 2,
                },
            }}
        >
            <Link
                href="https://www.ipa.go.jp/security/anshin/measures/account_security.html"
                sx={{ fontWeight: "bold", fontSize: "2vw" }}
            >
                IPA 不正ログイン特集ページ
            </Link>
        </Box>
    );
}
