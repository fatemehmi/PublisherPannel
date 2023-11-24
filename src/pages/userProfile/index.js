import Sidebar from "@/components/Sidebar";
import useUserProfile from "@/react-query/hooks/useUserProfile";
import {
	Box,
	Button,
	Card,
	CardBody,
	Divider,
	FormErrorMessage,
	Icon,
	Input,
	Text,
	Textarea,
} from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { useRouter } from "next/router";
import * as Yup from "yup";
import validatePass from "@/helpers/validatePass";

const headerStyle = {
	fontSize: "20px",
	fontStyle: "normal",
	fontWeight: "600",
};

const labelStyle = {
	collor: "#515457",
	fontSize: "16px",
	fontStyle: "normal",
	fontWeight: "500",
	lineHeight: "24px",
	letterSpacing: "-0.176px",
	marginBottom: "8px",
};

const inputStyle = {
	display: "flex",
	width: "343px",
	padding: "16px 20px",
	justifyContent: "flex-start",
	alignItems: "center",
	gap: "8px",
	border: "1px solid #C8C8C8",
	borderRadius: "16px",
	marginBottom: "16px",
};

const liStyle = {
	fontSize: "16px",
	fontWeight: "400",
	lineHeight: "32px",
	color: "#575DFB",
	listStyleType: "disc",
};

const ruleTitleStyle = {
	color: "#575DFB",
	fontSize: "20px",
	fontWeight: "500",
	lineHeight: "16px",
	marginBottom: "16px",
};

const buttonStyle = {
	width: "343px",
	marginTop: "24px",
	padding: "8px",
	borderRadius: "16px",
	justifyContent: "center",
	alignItems: "center",
	backgroundColor: "#575DFB",
	fontWeight: "400",
};

const UserProfile = () => {
	const router = useRouter();
	const pageName = router.pathname;

	const { email, username } = useUserProfile();

	const { mutate, isLoading, error } = useUserProfile();

	return (
		<div>
			<Sidebar pageName={pageName}>
				<CardBody>
					<Box
						display="flex"
						flexDir="row"
						justifyContent="space-between"
					>
						<div>
							<h2 style={labelStyle}>نام کاربری</h2>
							<Text
								marginTop="8px"
								border="1px solid #C8C8C8"
								display="flex"
								width="343px"
								padding="16px 20px"
								justifyContent="flex-start"
								alignItems="center"
								borderRadius="16px"
							>
								{username}
							</Text>
						</div>
						<div>
							<h2 style={labelStyle}>ایمیل</h2>
							<Text
								marginTop="8px"
								border="1px solid #C8C8C8"
								display="flex"
								width="343px"
								padding="16px 20px"
								justifyContent="flex-start"
								alignItems="center"
								borderRadius="16px"
							>
								{email}
							</Text>
						</div>
					</Box>
					<Divider margin="32px auto" />
					<Box display="flex" flexDir="row">
						<Icon></Icon>&nbsp;&nbsp;
						<Text style={headerStyle}>تغییر رمز عبور</Text>
					</Box>

					<Box
						marginTop="24px"
						display="flex"
						flexDir="row"
						justifyContent="space-between"
					>
						<Formik
							initialValues={{
								oldpass: "",
								newpassword: "",
								passwordConf: "",
							}}
							validationSchema={Yup.object({
								oldpass: Yup.string().required(
									"وارد کردن رمز عبور قبلی اجباری است."
								),
								newpassword: Yup.string().required(
									"وارد کردن رمز عبور جدید اجباری است."
								),
								passwordConf: Yup.string()
									.required(
										"وارد کردن تکرار رمز عبور اجباری است."
									)
									.oneOf(
										[Yup.ref("newpassword"), null],
										"رمز عبور و تکرار آن یکسان نیستند."
									),
							})}
							onSubmit={(values, { setSubmitting }) => {
								alert(values);
								mutate({
									old_password: values.oldpass,
									new_password: values.newpassword,
								});
								setSubmitting(false);
							}}
						>
							{(formik) => (
								<Form>
									<h2 style={labelStyle}>رمز عبور فعلی</h2>
									<Input
										type="password"
										name="oldpass"
										style={inputStyle}
										defaultValue={formik.values.oldpass}
										isInvalid={
											formik.errors.oldpass &&
											formik.touched.oldpass
										}
										onChange={formik.handleChange}
									/>
									<h2 style={labelStyle}>رمز عبور جدید</h2>
									<Input
										type="password"
										name="newpassword"
										style={inputStyle}
										defaultValue={formik.values.newpassword}
										isInvalid={
											formik.errors.newpassword &&
											formik.touched.newpassword
										}
										onChange={formik.handleChange}
									/>
									<h2 style={labelStyle}>
										تکرار رمز عبور جدید
									</h2>
									<Input
										type="password"
										name="passwordConf"
										style={inputStyle}
										defaultValue={
											formik.values.passwordConf
										}
										isInvalid={
											formik.errors.passwordConf &&
											formik.touched.passwordConf
										}
										onChange={formik.handleChange}
									/>
									<Button
										type="submit"
										color="white"
										style={buttonStyle}
										disabled={
											!validatePass(
												formik.values.oldpass
											).every((el) => el.value) &&
											!validatePass(
												formik.values.newpassword
											).every((el) => el.value) &&
											!formik.isValid
										}
									>
										تغییر رمز
									</Button>
								</Form>
							)}
						</Formik>
						<Box
							display="flex"
							padding="24px 40px"
							flexDirection="column"
							justifyContent="center"
							alignItems="flex-start"
							gap="16px"
							borderRadius="16px"
							backgroundColor="#575DFB1A"
							height="248px"
						>
							<ul marginRight="20px">
								<li style={ruleTitleStyle}>رمز عبور باید:</li>
								<li style={liStyle}>
									حداقل 8 کاراکتر داشته باشد.
								</li>
								<li style={liStyle}>
									شامل حروف انگلیسی بزرگ و کوچک باشد.
								</li>
								<li style={liStyle}>حداقل شامل یک عدد باشد.</li>
								<li style={liStyle}>
									حداقل شامل یک کاراکتر باشد.
								</li>
								<li style={liStyle}>با تکرار آن یکسان باشد.</li>
							</ul>
						</Box>
					</Box>
				</CardBody>
			</Sidebar>
		</div>
	);
};

export default UserProfile;
