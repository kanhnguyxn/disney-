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


## Position

a. static
--Mặc định của tất cả phần tử.
--Phần tử được đặt theo thứ tự dòng chảy tự nhiên (natural flow) của tài liệu HTML.
--Không thể dùng các thuộc tính top, right, bottom, left.

b. relative
--Phần tử được đặt dựa trên vị trí ban đầu trong dòng chảy tự nhiên.
--Có thể sử dụng top, right, bottom, left để dời vị trí phần tử so với vị trí gốc.
--Không ảnh hưởng đến bố cục các phần tử khác.

c. absolute
--Phần tử được đặt dựa trên phần tử cha gần nhất có position là relative, absolute, hoặc fixed. Nếu không có, nó sẽ dựa vào body.
--Sử dụng top, right, bottom, left để định vị.
--Loại bỏ khỏi dòng chảy tự nhiên (không chiếm không gian trong tài liệu).

d. fixed
--Phần tử được định vị tương đối với cửa sổ trình duyệt, bất kể bạn cuộn trang.
--Thường được dùng cho thanh điều hướng cố định hoặc các nút "lên đầu trang".


e. sticky
--Kết hợp tính năng của relative và fixed.
--Phần tử hoạt động như relative trong dòng chảy tự nhiên, nhưng khi cuộn đến một giới hạn nhất định, nó sẽ hoạt động như fixed.
--Yêu cầu thiết lập giá trị top, bottom, left, hoặc right


## transition
---transition trong CSS được sử dụng để tạo hiệu ứng chuyển tiếp mượt mà khi các thuộc tính của phần tử thay đổi.
--------property: Thuộc tính CSS mà bạn muốn áp dụng hiệu ứng chuyển đổi.
--------duration: Thời gian chuyển đổi (ví dụ: 0.5s hoặc 500ms).
--------timing-function: Hàm thời gian (cách hiệu ứng diễn ra, ví dụ: ease, linear, ease-in-out).
---------delay: Thời gian chờ trước khi hiệu ứng bắt đầu.

-------------Theo timing function
Hàm thời gian	------------>Ý nghĩa
ease	        ------------>Mặc định. Bắt đầu chậm, tăng tốc, và chậm dần.
linear	      ------------>Tốc độ đồng đều trong suốt quá trình chuyển đổi.
ease-in	      ------------->Bắt đầu chậm, sau đó tăng tốc.
ease-out	    -------------->Bắt đầu nhanh, sau đó chậm dần.
ease-in-out	   ------------->Kết hợp cả hai: bắt đầu chậm, tăng tốc ở giữa, và chậm dần ở cuối.
cubic-bezier(x,y,z,w)	------>Tùy chỉnh hoàn toàn cách chuyển đổi bằng đường cong Bezier.

cubic-bezier(x, y, z, w) là cách để tùy chỉnh hiệu ứng chuyển đổi trong CSS, dựa trên đường cong Bezier. Các thông số x, y, z, w xác định hình dạng của đường cong, từ đó điều chỉnh tốc độ và cách hiệu ứng diễn ra.

$$$$Ý nghĩa của các tham số
Đường cong Bezier được xác định bởi 4 điểm điều khiển:

Điểm đầu: Luôn là (0, 0) (bắt đầu hiệu ứng).
Điểm kết thúc: Luôn là (1, 1) (kết thúc hiệu ứng).
Hai điểm điều khiển trung gian: (x, y) và (z, w), được cung cấp bởi người dùng.
x và z: Đại diện cho vị trí ngang (horizontal) của các điểm trung gian trên trục thời gian (phạm vi: 0 đến 1).
x và z: Xác định thời gian tương đối của các điểm điều khiển (luôn trong khoảng 0 đến 1).
y và w: Đại diện cho vị trí dọc (vertical) trên trục tiến trình của hiệu ứng (có thể lớn hơn 1 hoặc nhỏ hơn 0).
y và w: Xác định giá trị tiến trình của hiệu ứng (có thể lớn hơn 1 hoặc nhỏ hơn 0).



#####react-router-dom là một thư viện phổ biến trong React giúp bạn quản lý điều hướng (routing) trong ứng dụng React, cho phép bạn tạo các trang (routes) và chuyển hướng giữa chúng mà không cần phải tải lại toàn bộ trang
1.Các component quan trọng trong react-router-dom:
    BrowserRouter: Bao bọc toàn bộ ứng dụng để sử dụng các tính năng điều hướng.
    Routes: Bao bọc các Route và xác định các tuyến đường cho ứng dụng.
    Route: Định nghĩa các tuyến đường và kết nối URL với component.
    Link: Cung cấp liên kết điều hướng mà không tải lại trang.
    NavLink: Tương tự như Link, nhưng hỗ trợ thêm kiểu CSS khi liên kết được chọn.
    useNavigate: Hook để điều hướng chương trình từ các component.