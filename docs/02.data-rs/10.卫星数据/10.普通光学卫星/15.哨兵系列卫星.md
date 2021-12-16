# 哨兵系列卫星介绍与下载教程

# 简介

哥白尼计划是欧盟的地球观测计划，哨兵系列卫星是欧洲哥白尼计划的一部分。

## 哥白尼计划

几十年来，欧洲各国在地球观测领域做了大量研发工作，但具有重复性与缺乏服务连续性。1998 年，欧洲成立了全球环境安全监测GMES用于统筹各国的地球观测系统。2012 年 ，在欧盟直接参与融资和发展后，该系统后来更名为**哥白尼**。关于哥白尼计划的具体情况，请看该视频：

## 视频



哥白尼计划由三部分组成：

空间部分（**哨兵系列**太空任务与其他太空机构任务）；

测量部分（提供海洋、大陆表面和大气信息的陆基和机载数据收集网络）；

数据管理与全球共享；

## 哨兵卫星年表

| 卫星名      | 发射时间(年月日)    | 终止时间              | 卫星定位                                  |
| ----------- | ------------------- | --------------------- | ----------------------------------------- |
| Sentinel-1A | 2014.4.3            | 在运行，预期寿命7年   | 雷达                                      |
| Sentinel-1B | 2016.4.25           | 在运行，预期寿命7年   | 雷达                                      |
| Sentinel-2A | 2015.6.23           | 在运行，预期寿命7年   | 高分辨率光学                              |
| Sentinel-2B | 2017.3.7            | 在运行，预期寿命7年   | 高分辨率光学                              |
| Sentinel-3A | 2016.2.16           | 在运行，预期寿命7年   | 包含雷达、光学成像光谱仪、定位等7类传感器 |
| Sentinel-3B | 2018.4.25           | 在运行，预期寿命7年   | 包含雷达、光学成像光谱仪、定位等7类传感器 |
| Sentinel-4  | 预计2023年发射      | 预期寿命8.5年         | 气象                                      |
| Sentinel-5P | 2017.10.13          | 在运行，预期寿命7年   | 大气污染观测                              |
| Sentinel-5  | 预计2021-2022年发射 | 预期寿命7.5年         | 大气监测                                  |
| Sentinel-6A | 2020.11.21          | 在运行，预期寿命5.5年 | 全球海洋地形观测                          |
| Sentinel-6B | 预计2025年12月发射  | 预期寿命5.5年         | 全球海洋地形观测                          |
| Sentinel-7  | 暂无时间安排        | 暂无                  | 人为二氧化碳排放监测                      |
| Sentinel-8  | 暂无时间安排        | 暂无                  | 高时空地表温度监测                        |
| Sentinel-9  | 暂无时间安排        | 暂无                  | 极地冰雪地形高度计                        |
| Sentinel-10 | 暂无时间安排        | 暂无                  | 环境高光谱成像                            |
| Sentinel-11 | 暂无时间安排        | 暂无                  | 极地成像微波辐射计                        |
| Sentinel-12 | 暂无时间安排        | 暂无                  | 欧洲雷达观测系统-L波段SAR                 |

# 哨兵一号

## 简介

Sentinel-1 任务包括由两颗极轨卫星Sentinel-1A与Sentinel-1B组成星座，昼夜运行，执行 C 波段合成孔径雷达成像。可供用户使用的 Level-0、Level-1 和 Level-2 数据产品。

![](https://gitee.com/kitmyfaceplease/image_upload/raw/master/image/539dbcffaf225c42d0a6ba5eb06e99e.png)

## 传感器

SENTINEL-1 携带一台 C-SAR传感器，工作在 5.405 GHz 的中心频率。它包括一个右视有源相控阵天线，支持快速的仰角和方位角扫描。C-SAR传感器在双极化（HH + HV，VV + VH）通过一个发射链（可切换到H或V）和两个平行的支撑件来实现操作接收对H和V偏振链。双极化数据可用于土地覆盖分类和海冰应用。

![](https://gitee.com/kitmyfaceplease/image_upload/raw/master/image/20211217053343.png)

Sentinel-1拥有四种采集模式：

- 带状图 (Stripmap，SM)
- 干涉宽幅 (Interferometric Wide swath，IW)
- 超宽幅 (Extra-Wide swath，EW)
- 波浪模式 (Wave mode，WV)。

### **带状图(SM)模式**:

![](https://gitee.com/kitmyfaceplease/image_upload/raw/master/image/20211217054305.png)

 该模式窄幅宽度为80 公里，提供 5 m x 5 m 分辨率影像。Sentinel-1通过改变光束入射角和仰角光束宽度，用户可以选择六个成像条带之一。

### **干涉宽幅（IW）模式**:

 该模式是Sentinel-1在陆地上的默认采集模式，窄幅宽度为250 公里，提供 5 m x 20 m 分辨率影像。

![](https://gitee.com/kitmyfaceplease/image_upload/raw/master/image/20211217054102.png)

Sentinel-1在该模式下，使用 TOPSAR 技术。除了像 SCANSAR 在范围内控制波束外，还可以在每个脉冲串的方位方向上从后到前电子控制波束，避免扇形并产生更高质量的图像。多普勒频谱（在方位域中）和波数频谱（在仰角域中）的充分重叠确保了干涉测量。

### **超宽幅（EW）模式**：

该模式主要用于海上和极地区域运营服务，满足覆盖面广，短重访时间要求。

![](https://gitee.com/kitmyfaceplease/image_upload/raw/master/image/20211217054722.png)

EW 模式的工作方式类似于 IW 模式，采用 TOPSAR 技术，使用五个子带而不是三个，导致分辨率较低（20 m x 40 m）。EW 模式和 IW 模式类似，同样可用于干涉测量。

### **波浪（WV）模式**

SENTINEL-1的WV模式与全球海浪模型相结合，用以确定海洋上波浪的方向、波长和高度。

![](https://gitee.com/kitmyfaceplease/image_upload/raw/master/image/20211217055257.png)

波模式由 20 公里 x 20 公里的条带图像组成，传感器两个不同的入射角上交替采集。每 100 公里采集一次波图像，同一入射角的影像相隔 200 公里。

## 产品介绍

目前欧空局官网上提供4种产品数据下载，分别是原始数据RAW、SLC、GRD和OCN。

![](https://gitee.com/kitmyfaceplease/image_upload/raw/master/image/20211217063516.png)

生成一级数据产品所涉及的处理步骤包括预处理、多普勒质心估计、单视复聚焦、生成 SLC 产品、生成GRD 产品、影像后处理和用于组装多个子的模式特定处理。具体的生成过程如下所示:

![](https://gitee.com/kitmyfaceplease/image_upload/raw/master/image/20211217063408.png)

1 级数据可以处理成单视复数 (SLC) 和/或地面范围检测 (GRD) 产品。

SLC 产品保留了相位信息并以自然像素间距进行处理。

GRD 产品包含检测到的幅度并进行多视以减少散斑的影响。

OCN是针对Wave Mode推出的2级产品。

## 数据下载

仅限目前我知道的，一共有四种方法可以下载：

- 欧空局官网 (https://scihub.copernicus.eu/)  
- 地理空间数据云 (http://www.gscloud.cn/)
- Google Earth Engine (https://code.earthengine.google.com/)
- PIE Engine (https://engine.piesat.cn/engine/home)

![](https://gitee.com/kitmyfaceplease/image_upload/raw/master/image/20211217061344.png)

我这里比较推荐大家使用**地理空间数据云**进行下载，主要是两个原因：数据更新及时；国内下载**速度快**。

地理空间数据云操作比较简单，不再做介绍。这里介绍官网的下载教程：

进入欧空局官网（https://scihub.copernicus.eu/）：

![](https://gitee.com/kitmyfaceplease/image_upload/raw/master/image/20211217061614.png)

点击进入Open Hub，如果有账号直接登录，没有账号点击Sign up：

![](https://gitee.com/kitmyfaceplease/image_upload/raw/master/image/20211217061707.png)

按要求填写个人资料，完成后点击Register：

![](https://gitee.com/kitmyfaceplease/image_upload/raw/master/image/20211217061954.png)

之后会弹出一个窗口，需要去自己的邮箱激活账号，进入自己的邮箱中跳转激活链接即可：

![](https://gitee.com/kitmyfaceplease/image_upload/raw/master/image/20211217062023.png)

账号激活后，登录主页面，鼠标左键勾选待下载区域影像：

![](https://gitee.com/kitmyfaceplease/image_upload/raw/master/image/20211217064352.png)

点击数据栏，进行数据筛选：

![](https://gitee.com/kitmyfaceplease/image_upload/raw/master/image/20211217062319.png)

在数据筛选栏，选择时间（两个时间sensing period和ingestion period，个人理解是采样时间和入库时间，未查到相关资料，一般来说选sensing period就行了）、极化方式、卫星、产品类型等：

![](https://gitee.com/kitmyfaceplease/image_upload/raw/master/image/20211217064444.png)

点击搜素按钮，会弹出相应影像，点击下载即可：

![](https://gitee.com/kitmyfaceplease/image_upload/raw/master/image/20211217064530.png)

# 哨兵二号

![](https://gitee.com/kitmyfaceplease/image_upload/raw/master/image/20211217022257.png)

# 哨兵三号



# 哨兵四号

# 哨兵五号

# 哨兵5p

# 哨兵六号

# 哨兵七号-哨兵十二号

目前欧空局没有透露更多细节，后续卫星有进展，会在“地信遥感数据汇”网站（www.gisrsdata.com）上更新：

![](https://gitee.com/kitmyfaceplease/image_upload/raw/master/image/20211217030800.png)

# 哨兵工具

针对哨兵系列数据的处理和使用，欧空局联合一系列机构开发了众多工具箱，具体为：

## SNAP

SNAP是适用于所有 Sentinel 工具箱的通用架构，是目前使用最广泛的Sentinel工具。

![](https://gitee.com/kitmyfaceplease/image_upload/raw/master/image/20211217033656.png)

SNAP 非常适合地球观测处理和分析。

下载地址为：http://step.esa.int/main/download/snap-download/

## S1TBX

S1TBX是处理Sentinel-1 数据的工具箱，用于校准、散斑过滤、配准、正射校正、镶嵌、数据转换、偏振测量和干涉测量。

下载地址为：http://step.esa.int/main/download/

## Atmospheric Toolbox

Atmospheric Toolbox是用于摄取、处理和分析大气遥感数据的工具。该工具箱由CODA、HARP、VISAN和QDOAS四部分组成。

![](https://gitee.com/kitmyfaceplease/image_upload/raw/master/image/20211217032306.png)

下载地址为：https://atmospherictoolbox.org/

## Broadview 

 ESA和CNES联合开发的高度测量开源工具Broadview。

![](https://gitee.com/kitmyfaceplease/image_upload/raw/master/image/20211217032820.png)

该工具能够读取来自官方数据中心的所有测高数据（ERS -1 、ERS -12、Topex/Poseidon、Geosat Follow-on、Jason-1、Envisat、Jason-2、CryoSat和 Sentinel-3），并进行高度数据处理和可视化。

## PolSARpro

PolSARpro 用于开发极化 SAR 数据。

![](https://gitee.com/kitmyfaceplease/image_upload/raw/master/image/20211217032939.png)

下载地址为：https://step.esa.int/main/toolboxes/polsarpro-v6-0-biomass-edition-toolbox/

## CFI 

Earth Observation CFI 软件是用于计时、坐标转换、轨道传播、卫星指向计算和目标能见度计算的预编译 C 库集合。

下载地址为：https://eop-cfi.esa.int/index.php/mission-cfi-software/eocfi-software/branch-4-x

## ESOV NG

该工具是作为所有 ESA 卫星仪器条带可视化的工具，并帮助用户了解卫星测量的时间和地点。

https://earth.esa.int/eogateway/tools/esov-software-tools-esov-ng-

还存在很多其他官方和第三方的哨兵数据相关工具，这里不再做详细描述，感兴趣的可以去Google一下。

# 参考

https://scihub.copernicus.eu/

https://www.mdpi.com/2072-4292/11/17/1969/htm

https://en.wikipedia.org/wiki/Copernicus_Programme

https://sentinels.copernicus.eu/web/sentinel/missions/sentinel-1/instrument-payload

