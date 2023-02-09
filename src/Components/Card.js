import { useState } from 'react';
import { useDispatch} from "react-redux";
import { deleteListing, updateListing } from '../Features/dashboardSlice';
import {Card, Modal, Form, Input} from 'antd';
import {HeartOutlined, HeartFilled, EditOutlined, DeleteFilled, MailOutlined, PhoneOutlined, GlobalOutlined } from '@ant-design/icons'



const ItemCard = ({ id, name, email, phone, username, website})=>{
    const dispatch = useDispatch()
    const [newName, setName] = useState(name);
    const [newEmail, setEmail] = useState(email);
    const [newPhone, setPhone] = useState(phone);
    const [newWebsite, setWebsite] = useState(website);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [heartFilled, setHeartFilled] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
        dispatch(
            updateListing({ id: id, name: newName, email: newEmail, phone: newPhone, website: newWebsite })
        );
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const handleClick = () => {
        setHeartFilled(!heartFilled);
    };

    const Heart = ({ heartFilled }) => {
        if (heartFilled) {
            return <HeartFilled onClick={handleClick}  style={{color: "red", fontSize: 20}} />;
        } else {
            return <HeartOutlined onClick={handleClick}  style={{color: "red", fontSize: 20}} />;
        }
    };

    const imageUrl = `https://avatars.dicebear.com/v2/avataaars/${username}.svg?options[mood][]=happy`;

    return(
        <div className='card-container'
            style={{
                margin: 15
            }}>
            <Card
                hoverable
                actions={
                    [
                        <Heart heartFilled={heartFilled} />,
                        <EditOutlined onClick={showModal}  style={{fontSize: 20}} />,
                        <DeleteFilled style={{fontSize: 20}} onClick={() => {
                                dispatch(deleteListing({ id: id }));
                        }} />
                    ]
                }
                cover={
                    <div className='image-container'>
                        <img alt="example" src={imageUrl}
                         style={{
                            width: "100%",
                            height: 200,
                            borderRadius: 0,
                            background: '#f5f5f5'
                        }}
                        />
                    </div>
                }>

                <h3>{name} </h3>
                <div>
                    <MailOutlined />
                    <p>{email}</p>
                </div>
                <div>
                    <PhoneOutlined />
                    <p>{phone}</p>
                </div>
                <div>
                    <GlobalOutlined />
                    <p>{website}</p>
                </div>
            </Card>

            {/* modal */}
            <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} >
                <Form>
                    <Form.Item label="Name" name="name"  required>
                        <Input  
                            placeholder='Name' 
                            defaultValue={name || newName} 
                            required 
                            onChange={(event) => {
                                setName(event.target.value);
                            }}>
                        </Input>
                    </Form.Item>
                    <Form.Item label="Email" name="email" required>
                        <Input 
                            placeholder='email' 
                            required 
                            defaultValue={email || newEmail}
                            onChange={(event) => {
                                setEmail(event.target.value);
                            }}>  
                        </Input>
                    </Form.Item>
                    <Form.Item label="Phone" name="phone" required>
                        <Input 
                            placeholder='phone' 
                            required 
                            defaultValue={phone || newPhone}
                            onChange={(event) => {
                                setPhone(event.target.value);
                            }}>
                        </Input>
                    </Form.Item>
                    <Form.Item label="Website" name="website" required>
                        <Input 
                            placeholder='website' 
                            required 
                            defaultValue={website || newWebsite}
                            onChange={(event) => {
                                setWebsite(event.target.value);
                            }}>
                        </Input>
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    )
}

export default ItemCard
