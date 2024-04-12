

# Rancher

## 网络问题

![image-20210507101744194](https://tva1.sinaimg.cn/large/008i3skNgy1gse42tutiuj320c0ey75t.jpg)



## 应用商店

### questions.yml

| 变量                | 类型          | 必填 | 描述                                                         |
| ------------------- | ------------- | ---- | ------------------------------------------------------------ |
| variable            | string        | 是   | 定义`values.yml`文件中指定的变量名。如果是嵌套对象，可以使用`foo.bar`这种形式。 |
| **label**           | string        | 是   | 指定变量的标题显示内容。                                     |
| **description**     | string        | 否   | 指定变量的描述显示内容。                                     |
| **type**            | string        | 否   | 变量类型，如果未指定，则默认为`string`(当前支持的类型为 string，multiline，boolean，int，enum，password，storageclass，hostname，pvc 和 secret。 |
| **required**        | bool          | 否   | 定义变量是否为必填(true \| false)                            |
| **default**         | string        | 否   | 指定默认值。                                                 |
| group               | string        | 否   | 根据输入值对变量进行分组。                                   |
| min_length          | int           | 否   | 最小字符长度。                                               |
| max_length          | int           | 否   | 最大字符长度。                                               |
| min                 | int           | 否   | 最小整数值。                                                 |
| max                 | int           | 否   | 最大整数值。                                                 |
| options             | []string      | 否   | 当变量类型为`enum`时指定选项，例如：options: - "ClusterIP"  - "NodePort"  - "LoadBalancer" |
| valid_chars         | string        | 否   | 用于对输入字符进行验证的正则表达式。                         |
| invalid_chars       | string        | 否   | 用于对无效输入字符验证的正则表达式。                         |
| subquestions        | []subquestion | 否   | 添加一个子问题数组。                                         |
| show_if             | string        | 否   | 如果条件变量为 true，则显示当前变量。例如`show_if: "serviceType=Nodeport"` |
| show_subquestion_if | string        | 否   | 如果条件变量为 true，或等于某个选项，则显示它的子问题。例如`show_subquestion_if: "true"` |

> **示例**

```yaml
categories:
  - Blog
  - CMS
questions:
	# 变量
  - variable: persistence.enabled
  	# 默认值
    default: "false"
    # 描述
    description: "Enable persistent volume for WordPress" # 传递给values.yml的值
    # 类型
    type: boolean
    # 是否必填
    required: true
    # 标题
    label: WordPress Persistent Volume Enabled
    # 是否显示子问题
    show_subquestion_if: true
    # 分组
    group: "WordPress Settings"
    # 子问题
    subquestions:
    	# 子问题1
      - variable: persistence.size # 传递给values.yml的值
        default: "10Gi"
        description: "WordPress Persistent Volume Size"
        type: string
        label: WordPress Volume Size
      # 子问题2
      - variable: persistence.storageClass # 传递给values.yml的值
        default: ""
        description: "If undefined or null, uses the default StorageClass. Default to null"
        type: storageclass
        label: Default StorageClass for WordPress
```

## 服务发现问题

![image-20210508162253825](https://tva1.sinaimg.cn/large/008i3skNgy1gse44s0fpzj31p00u0tc5.jpg)

## Base64 加解密

```
# 加密：echo -n "value" | base64
# 解密： echo 密文 | base64 -d
```

![25441619167151_.pic_hd](https://tva1.sinaimg.cn/large/008i3skNgy1gse44sg9suj322a0dadha.jpg)

解决方案：

![image-20210425214242878](https://tva1.sinaimg.cn/large/008i3skNgy1gse44r6sdrj31570u0td5.jpg)



