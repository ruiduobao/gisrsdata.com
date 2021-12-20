# 1.平台简介

## 1.1介绍

Microsoft Planetary Computer (以下简称MPC)，是一个服务于**环境**可持续性发展和**地球科学**研究的云计算平台。该平台由微软进行开发，目前正处于内测阶段，用户通过简单申请即可获得使用权限。

![](https://gitee.com/kitmyfaceplease/image_upload/raw/master/image/20211220225209.png)

MPC由四个主要部分组成：

数据集：PB级别的地球科学数据，托管在Azure上，并提供给用户免费使用。

数据搜索：用户可跨空间和时间搜索相关数据的API。

数据处理：全面管理的计算环境，使科学家能够处理大量的地理空间数据集。

相关应用：微软和相关合作伙伴开发的应用，可直接调用。

该平台的信息可以观看官方宣传视频：



## 1.2开发支持

目前MPC支持JavaScript、Python、R三种开发语言，并且提供基于Tensorflow、PyTorch、Qgis等多种虚拟开发环境。本地可使用VS code进行相应开发：

![](https://gitee.com/kitmyfaceplease/image_upload/raw/master/image/20211220224006.png)

## 1.3 已有数据集

目前MPC的数据相对较少，因此我将已有数据全部列出:

**Biodiversity**：

HGB: Harmonized Global Biomass for 2010(300m分辨率的2010年生物量密度图)

MoBI: Map of Biodiversity Importance(美洲大陆的2216种濒危物种栖息地)

**DEM**：

ALOS World 3D-30m(ALOS卫星获得的全球30m分辨率DEM)

Copernicus DEM GLO-30（哥白尼计划的全球30m分辨率DEM）

Copernicus DEM GLO-90（哥白尼计划的全球90m分辨率DEM）

NASADEM HGT v001（全球30m的DEM）

USGS 3DEP Seamless DEMs（1到60米分辨率的美国DEM）

**Fire：**

MTBS: Monitoring Trends in Burn Severity（美国火灾严重程度产品）

**Imagery**:

ASTER L1T

GOES-R Cloud & Moisture Imagery（云和水蒸气图像产品）

Landsat 8 Collection 2 Level-2（Landsat的二级产品）

NAIP: National Agriculture Imagery Program（包含高分辨率航空图像）

Sentinel-2 Level-2A（哨兵卫星的二级产品）

**Infrastructure**:

HREA: High Resolution Electricity Access（灯光数据，VIIRS卫星图像获得全球电力）

**Land use/Land cover**:

Esri 10-Meter Land Cover（全球10m土地覆盖）

USGS Gap Land Cover（美国范围内的土地覆盖）

**Water**:

JRC Global Surface Water（基于Landsat的全球水体）

# 2.注册

进入官方，链接为：https://planetarycomputer.microsoft.com/

![](https://gitee.com/kitmyfaceplease/image_upload/raw/master/image/20211220230340.png)

点击进入Explore界面，选择你感兴趣的数据，我这里选择的是哨兵数据

![](https://gitee.com/kitmyfaceplease/image_upload/raw/master/image/20211220231117.png)

点击进入一张影像，选择代表编码的括号，会弹出一个调用代码，再次点击Launch Hub：

![](https://gitee.com/kitmyfaceplease/image_upload/raw/master/image/20211220231359.png)

这时选择使用微软账号进行登录（一般默认的是你电脑的Microsoft账号），如果没有微软账号的可以先注册微软账号：

![](https://gitee.com/kitmyfaceplease/image_upload/raw/master/image/20211220231527.png)

目前MPC正处于内测阶段，使用MPC需要申请权限，点击request access：

![](https://gitee.com/kitmyfaceplease/image_upload/raw/master/image/20211220231859.png)

填写个人信息，这个按真实资料填写就行：

![](https://gitee.com/kitmyfaceplease/image_upload/raw/master/image/20211220232045.png)

填写完毕后，进行提交，会显示已提交信息，一般等待**一天**左右即可获得权限。如果没有获得权限，可以发邮件给官方，表达你想使用这个平台的意愿。

![](https://gitee.com/kitmyfaceplease/image_upload/raw/master/image/20211220232300.png)

最后，通过申请之后，即可进入MPC进行代码编写：

![](https://gitee.com/kitmyfaceplease/image_upload/raw/master/image/20211220232516.png)

如果不习惯在线操作，也可使用VS code进行本地配置（都是微软一家的产品，支持效果好）:

![](https://gitee.com/kitmyfaceplease/image_upload/raw/master/image/20211220232719.png)

# 3.平台对比

目前遥感云计算平台开始涌现，已经开始改变遥感数据的处理方式。我简单整理了以下四种平台，如下所示：

| 平台         | Google Earth Engine(GEE) | PIE-Engine(PIE)    | Microsoft Planetary Computer(MPC) | ESA-USGS               |
| ------------ | ------------------------ | ------------------ | --------------------------------- | ---------------------- |
| 厂商         | 谷歌                     | 航天宏图           | 微软                              | 欧空局、美国地质调查局 |
| 公测时间     | 2015年                   | 2020年             | 内测阶段，尚未公测                | 开发阶段               |
| 官方编程语言 | JavaScript、Python       | JavaScript、Python | JavaScript、Python、R             | 暂无信息               |
| 数据集的数量 | 495个数据集              | 143个数据集        | 17个数据集                        | 暂无信息               |
| 网络连接     | 需科学上网               | 直连               | 直连                              | 暂无信息               |
| 备注         | 遥感云计算的行业先驱     | 国产自主可控       | 注重气候变化与地球保护            | 暂无信息               |

数据集的数量来自官网，通过数据集HTML标签数进行统计（截止时间：2021年12月20日）。其中ESA-USGS 遥感云计算平台是今年释放的新闻，目前处于开发阶段，正式上线时间不明。

# 4.写在最后

（1）MPC，背靠国际大厂，能保证这个平台完成度很高。 它并没有直接和GEE对标，而是找到自己的发力点：全球环境变化。

（2）考虑到GEE出现过，开始阶段很容易通过用户申请，目前反而申请比较繁琐。读者如果有意研究遥感云计算，**尽快注册**MPC。

