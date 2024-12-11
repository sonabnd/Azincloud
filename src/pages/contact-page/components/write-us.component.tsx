import { Form, Input, Button, Select, Upload, Checkbox } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import styles from "./write-us.module.scss";
import contactFigure from "/src/assets/images/statics/form-bg-figure.png";
import contactImg from "/src/assets/images/statics/form-img.png";
import { en } from "../../../assets/lang/en";
import { useCallback, useState } from "react";
import robotImg from '../../../assets/images/statics/robot-img.png';
import toastifyImg from '../../../assets/images/statics/toastify-img.png';
import close from '../../../assets/images/icons/close-circle.png';

const { TextArea } = Input;
const { Option } = Select;

const WriteUsComponent = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [form] = Form.useForm();

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

    return (
        <>
            <div className={styles.bottom}>
                <h1 className={styles.title}>{en.write_us_title}</h1>
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
                                rules={[{ required: true, message: en.name_message }]}
                                className={styles.formItem}
                            >
                                <Input placeholder={en.name_placeholder} className={styles.input} />
                            </Form.Item>
                            <Form.Item
                                name={en.surname_placeholder}
                                rules={[{ required: true, message: en.surname_message }]}
                                className={styles.formItem}
                            >
                                <Input placeholder="Surname" className={styles.input} />
                            </Form.Item>
                        </div>

                        <Form.Item
                            name="email"
                            rules={[
                                { required: true, message: en.email_message },
                                { type: "email", message: en.email_correct_message },
                            ]}
                        >
                            <Input placeholder="E-mail" className={styles.input} />
                        </Form.Item>

                        <Form.Item
                            name="mobile"
                            rules={[{ required: true, message: en.number_message }]}
                        >
                            <Input placeholder={en.number_placeholder} className={styles.input} />
                        </Form.Item>

                        <div className={styles.textareaUpload}>
                            <Form.Item
                                name="message"
                                rules={[
                                    { required: true, message: en.text_message },
                                    { max: 282, message: en.text_correct_message },
                                ]}
                            >
                                <TextArea rows={10} placeholder={en.text_placeholder} className={styles.textarea} />
                            </Form.Item>

                            <Form.Item name="file" className={styles.uploadContainer}>
                                <Upload>
                                    <Button icon={<UploadOutlined />} className={styles.uploadButton}>
                                        {en.upload_text}
                                    </Button>
                                </Upload>
                            </Form.Item>
                        </div>

                        <div className={styles.robot}>
                            <Form.Item
                                name="captcha"
                                valuePropName="checked"
                                rules={[{ required: true, message: en.robot_message }]}
                            >
                                <Checkbox className={styles.checkbox}>{en.robot_text}</Checkbox>
                            </Form.Item>
                            <img className={styles.img} src={robotImg} alt="" />
                        </div>

                        <Form.Item>
                            <Button
                                type="primary"
                                htmlType="submit"
                                className={styles.submitButton}
                            >
                                {en.send_text}
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
                    <button className={styles.btn} onClick={closeModal}>{en.close}</button>
                </div>
            )}
        </>
    );
};

export default WriteUsComponent;
