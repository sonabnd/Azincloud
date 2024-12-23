import { Form, Input, Button, Select, Upload, Checkbox } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import styles from "./write-us.module.scss";
import contactFigure from "/src/assets/images/statics/form-bg-figure.png";
import contactImg from "/src/assets/images/statics/form-img.png";
import { en } from "../../../../assets/lang/en";
import { useCallback, useState } from "react";
import toastifyImg from '../../../../assets/images/statics/toastify-img.png';
import close from '../../../../assets/images/icons/close-circle.png';
import ReCAPTCHA from 'react-google-recaptcha';
import useLocalization from "../../../../assets/lang";

const { TextArea } = Input;
const { Option } = Select;

const WriteUsComponent = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [form] = Form.useForm();
    const [captchaValue, setCaptchaValue] = useState<string | null>(null);
    const translate = useLocalization();

    const onFinish = (values: any) => {
        console.log("Form values:", values);
        console.log('test');
        setIsModalOpen(true);
        document.body.style.backgroundImage = `url('/src/assets/images/statics/opacity.png')`;
        form.resetFields();
    };

    const closeModal = useCallback(() => {
        setIsModalOpen(false);
        document.body.style.backgroundImage = "";
    }, [])
    
    const handleCaptchaChange = useCallback((value: string | null) => {
        setCaptchaValue(value);
    }, [captchaValue])

    return (
        <>
            <div className={styles.bottom}>
                <h1 className={styles.title}>{translate('write_us_title')}</h1>
                <div className={styles.formContainer}>
                    <Form
                        form={form}
                        layout="vertical"
                        className={styles.form}
                        onFinish={onFinish}
                    >
                        <div className={styles.row}>
                            <Form.Item
                                name="name"
                                rules={[{ required: true, message: translate('name_message') }]}
                                className={styles.formItem}
                            >
                                <Input placeholder={translate('name_placeholder')} className={styles.input} />
                            </Form.Item>
                            <Form.Item
                                name={translate('surname_placeholder')}
                                rules={[{ required: true, message: translate('surname_message') }]}
                                className={styles.formItem}
                            >
                                <Input placeholder={translate('surname_placeholder')} className={styles.input} />
                            </Form.Item>
                        </div>

                        <Form.Item
                            name="email"
                            rules={[
                                { required: true, message: translate('email_message') },
                                { type: "email", message: translate('email_correct_message') },
                            ]}
                        >
                            <Input placeholder={translate('email_placeholder')} className={styles.input} />
                        </Form.Item>

                        <Form.Item
                            name="mobile"
                            rules={[{ required: true, message: translate('number_message') }]}
                        >
                            <Input placeholder={translate('number_placeholder')} className={styles.input} />
                        </Form.Item>

                        <div className={styles.textareaUpload}>
                            <Form.Item
                                name="message"
                                rules={[
                                    { required: true, message: translate('number_message') },
                                    { max: 282, message: translate('text_correct_message') },
                                ]}
                            >
                                <TextArea rows={10} placeholder={translate('text_placeholder')} className={styles.textarea} />
                            </Form.Item>

                            <Form.Item name="file" className={styles.uploadContainer}>
                                <Upload>
                                    <Button icon={<UploadOutlined />} className={styles.uploadButton}>
                                        {translate('upload_text')}
                                    </Button>
                                </Upload>
                            </Form.Item>
                        </div>
                        <div className={styles.recaptchaWrapper}>
                            <ReCAPTCHA
                                sitekey="6LdMUZ4qAAAAAGD_6JyD8ytgB1Fbw11uWuevaZRV"
                                onChange={handleCaptchaChange}
                                className={styles.recaptcha}
                            />
                        </div>

                        <Form.Item>
                            <Button
                                type="primary"
                                htmlType="submit"
                                className={styles.submitButton}
                                disabled={!captchaValue}
                            >
                                {translate('send_text')}
                            </Button>
                        </Form.Item>
                    </Form>
                    <div className={styles.imgContainer}>
                        <img
                            className={styles.contactFigureImg}
                            src={contactFigure}
                            alt={en.img_alt}
                        />
                        <img
                            className={styles.contactImg}
                            src={contactImg}
                            alt={en.img_alt}
                        />
                    </div>
                </div>
            </div>
            {isModalOpen && (
                <div className={styles.modal}>
                    <div className={styles.close}>
                        <img onClick={closeModal} src={close} alt="" />
                    </div>
                    <img className={styles.img} src={toastifyImg} alt="" />
                    <button className={styles.btn} onClick={closeModal}>{translate('close')}</button>
                </div>
            )}
        </>
    );
};

export default WriteUsComponent;
