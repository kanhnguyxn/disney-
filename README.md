# youtube disney clone
link youtube: https://www.youtube.com/watch?v=R_OERlafbmw&list=PL-J2q3Ga50oMQa1JdSJxYoZELwOJAXExP
Lam lai theo bai huong dan de hocj :v

reportWebVitals() để gửi dữ liệu hiệu suất đến một dịch vụ phân tích (chẳng hạn Google Analytics) hoặc lưu trữ để kiểm tra và cải thiện hiệu suất của trang web


<!-- css -->
cachs dung file css trong react
1. css stylesheet
<!-- dottedbox.css -->
.DottedBox {
  margin: 40px;
  border: 5px dotted pink;
}
<!-- component dottedBox -->
import './DottedBox.css';

const DottedBox = () => (
  <div className="DottedBox">
  Get started with CSS styling
  </div>
);

2. inline styling
<!-- componrnt Box -->
const divStyle = {
  margin: '40px',
  border: '5px solid pink'
};
const Box = () => (
<div style={divStyle}>
  Get started with inline style
</div>
);

3. CSS modules
<!-- DashedBox.css -->
:local(.container) {
  margin: 40px;
  border: 5px dashed pink;
}
<!-- component -->

import styles from './DashedBox.css';

const DashedBox = () => (
  <div className={styles.container}>
    Get started with CSS Modules style
 </div>
)

LUU Y: :local(.tenClass) khi dùng với create-react-app và .tenClass khi không dùng với create-react-app.

4. Styled-components

#####cai dat: npm install styled-components

 <!-- component FormWrapper -->
 import styled from "styled-components"

const Input = styled.input`
 background: green
`

const FormWrapper = () => <Input placeholder="hola" />


<!-- element -->
scroll-behavior là thuộc tính CSS dùng để kiểm soát cách trang cuộn khi di chuyển đến một phần tử hoặc vị trí khác trong tài liệu

giatri   --mota
auto     --Cho phép một "hiệu ứng cuộn" nhảy thẳng giữa các phần tử trong hộp cuộn. Đây là mặc định
smooth   --Cho phép một "hiệu ứng cuộn" nhảy mượt mà giữa các phần
initial  --Đặt thuộc tính này thành giá trị mặc định của nó
inherit  --Kế thừa thuộc tính này từ phần tử cha của nó



#####react-router-dom là một thư viện phổ biến trong React giúp bạn quản lý điều hướng (routing) trong ứng dụng React, cho phép bạn tạo các trang (routes) và chuyển hướng giữa chúng mà không cần phải tải lại toàn bộ trang
1.Các component quan trọng trong react-router-dom:
    BrowserRouter: Bao bọc toàn bộ ứng dụng để sử dụng các tính năng điều hướng.
    Routes: Bao bọc các Route và xác định các tuyến đường cho ứng dụng.
    Route: Định nghĩa các tuyến đường và kết nối URL với component.
    Link: Cung cấp liên kết điều hướng mà không tải lại trang.
    NavLink: Tương tự như Link, nhưng hỗ trợ thêm kiểu CSS khi liên kết được chọn.
    useNavigate: Hook để điều hướng chương trình từ các component.