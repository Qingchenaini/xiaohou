import { Button, Form, Input } from 'antd';
import React, { useState } from "react";
import toast from 'react-hot-toast';
import { addPostOne, getPostOne, updatePost, deletePostApi } from "../../api/post";
import './publish.scss'

const { Search } = Input;

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};

const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};

interface artvalues {
    title: string;
    article: string;
}

const Publish: React.FC = () => {

    const [form] = Form.useForm();
    const [updateId, setUpdateId] = useState<number>(null);

    const onFinish = (values: artvalues) => {
        if (values.title || values.article) {
            console.log(values);
            //调用api发布文章
            const pubArticle = addPostOne({ title: values.title, content: values.article });
            if (pubArticle) {
                toast.success('发布成功')
            } else {
                toast.error('发布失败')
            }
        } else {
            toast.error('title and article is null')
        }
    };

    const onSearch = async (value, _e, info) => {
        if (value) {
            // 检查value是不是数字，如果是数字则按id查找，否则按title查找
            const isNumber = !isNaN(Number(value));
            const searchParams = isNumber ? { id: Number(value) } : { title: value };
            try {
                const postarticle = await getPostOne(searchParams);
                if (postarticle) {
                    console.log(postarticle);
                    setUpdateId(postarticle.id)
                    form.setFieldValue('title', postarticle.title)
                    form.setFieldValue('article', postarticle.content)
                } else {
                    console.log("No article found with the provided search criteria.");
                    toast.success('No title found')
                }
            } catch (error) {
                console.error("Failed to fetch article:", error);
            }
        } else {
            toast.error('search is null')
        }
    }



    const update = async (value) => {
        if (value.id || value.content || value.title) {
            console.log(value);
            try {
                const update = await updatePost(value.id, { title: value.title, content: value.content });
                if (update) {
                    console.log(update);
                    toast.success('帖子修改成功');
                } else {
                    console.log('帖子修改失败');
                    toast.error('帖子修改失败');
                }
            } catch (error) {
                console.error("Failed to fetch article:", error);
            }
        } else {
            toast.error('title and article is null')
        }
    }

    const deletepost = async (value) => {
        if (value.id) {
            console.log(value.id)
            try {
                const state = await deletePostApi(value.id);
                form.setFieldValue('title', null)
                form.setFieldValue('article', null)
                // form.setFieldValue('title',null)
                if (state) {
                    toast.success('删除成功')
                } else {
                    toast.error('删除失败')
                }
            } catch (error) {
                console.error("Failed to fetch article:", error);
                toast.error(error)
            }
        } else {
            toast.error('请先搜索帖子再删除')
        }
    }

    return (
        <div className="publish">
            <h1 style={{ marginBottom: 30 }}>帖子管理后台</h1>
            <Search placeholder="搜索标题" onSearch={onSearch} enterButton className='search' />
            <Form
                {...layout}
                form={form}
                name="control-hooks"
                onFinish={onFinish}
                // style={{ maxWidth: 600 }}
                className='form'
            >
                <Form.Item name="title" label="title" labelAlign='left'>
                    <Input allowClear />
                </Form.Item>
                <Form.Item name="article" label="article" labelAlign='left'>
                    <Input.TextArea rows={6} allowClear />
                </Form.Item>
                <Form.Item style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
                    <Button type="primary" htmlType="submit">
                        发布
                    </Button>
                    <Button
                        type="primary"
                        onClick={() => update({ title: form.getFieldValue('title'), content: form.getFieldValue('article'), id: updateId })}
                        style={{ marginLeft: 20 }}
                    >
                        修改
                    </Button>
                    <Button
                        type="primary"
                        style={{ marginLeft: 20 }}
                        onClick={() => deletepost({ id: updateId })}
                    >
                        删除
                    </Button>
                </Form.Item>
            </Form>

        </div>
    )
}
export default Publish