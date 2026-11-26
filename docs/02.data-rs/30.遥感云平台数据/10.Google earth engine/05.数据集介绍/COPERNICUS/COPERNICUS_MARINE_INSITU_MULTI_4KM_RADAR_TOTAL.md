---
title: "哥白尼海洋原位观测：高频雷达总流速"
date: 2026-11-03 12:00:00
permalink: /pages/579ef535/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "copernicus"
  - "currents"
  - "insitu"
  - "oceans"
  - "radar"
---

# 哥白尼海洋原位观测：高频雷达总流速

英文原名：Copernicus Global In-situ Observations of Ocean Currents - Radar Total

## 这是什么数据

原位主题集合中心（In Situ TAC）是一个分布式中心，围绕 7 个海洋学区域组织：全球海洋和 6 个 EUROGOOS 区域联盟，涉及欧洲 11 个国家的 14 个合作伙伴。它本身不布设任何观测系统，数据完全依赖哥白尼海洋服务之外的其他资金来源。

本数据集包含高频（HF）雷达的海表流观测。HF 雷达测得的表层流是水体顶部 0.3–2.5 米的平均值，具体取决于工作中心频率。

本数据集提供总速度分量：它是时间段内平均的表层流总速度场的网格图。总速度用非加权最小二乘拟合得到，把各测量站测得的径向速度映射到笛卡尔网格；最终产品是两个或多个雷达站重叠区域内、规则网格上的海流纬向与经向分量图。

更多细节见[用户手册](https://documentation.marine.copernicus.eu/PUM/CMEMS-INS-PUM-013-048.pdf)。

## 覆盖范围与时间

- 覆盖范围：高频雷达站覆盖的近岸海域（原位观测）
- 时间范围：2025-03-28 至 至今

## 分辨率与规格

- 数据类型：bigquery_table，在 Google Earth Engine 中调用

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| TIME | DATETIME | 观测时间 |
| LATITUDE | DOUBLE | 观测纬度 |
| LONGITUDE | DOUBLE | 观测经度 |
| DEPTH | DOUBLE | 深度层数 |
| DEPH | DOUBLE | 观测深度（米） |
| GDOP | DOUBLE | 几何精度因子 |
| DDNS_QC | INT | DDNS 的质量控制标志：0=未做质控，1=好，2=可能好，3=坏数据但可能可订正，4=坏数据，5=值已变更，6=未用，7=名义值，8=插值，9=缺测值。注：对应变量为有效值时，该质控位应为 1、2、5、7 或 8 |
| CSPD_QC | INT | CSPD 的质量控制标志：0=未做质控，1=好，2=可能好，3=坏数据但可能可订正，4=坏数据，5=值已变更，6=未用，7=名义值，8=插值，9=缺测值。注：对应变量为有效值时，该质控位应为 1、2、5、7 或 8 |
| VART_QC | INT | VART 的质量控制标志：0=未做质控，1=好，2=可能好，3=坏数据但可能可订正，4=坏数据，5=值已变更，6=未用，7=名义值，8=插值，9=缺测值。注：对应变量为有效值时，该质控位应为 1、2、5、7 或 8 |
| GDOP_QC | INT | GDOP 的质量控制标志：0=未做质控，1=好，2=可能好，3=坏数据但可能可订正，4=坏数据，5=值已变更，6=未用，7=名义值，8=插值，9=缺测值。注：对应变量为有效值时，该质控位应为 1、2、5、7 或 8 |
| QCflag | INT | 总体质量标志。注：值为 1 表示该行源文件的全部数据都好；但因为每行还有各字段的质控位，此值不为 1 并不必然意味着该行不能或不应当使用 |
| EWCT | DOUBLE | 表层海水东向流速（米/秒） |
| NSCT | DOUBLE | 表层海水北向流速（米/秒） |
| EWCS | DOUBLE | 表层海水东向流速的标准差（米/秒） |
| NSCS | DOUBLE | 表层海水北向流速的标准差（米/秒） |
| CCOV | DOUBLE | 表层海水流速的协方差（平方米/秒²） |
| POSITION_QC | INT | POSITION 的质量控制标志：0=未做质控，1=好，2=可能好，3=坏数据但可能可订正，4=坏数据，5=值已变更，6=未用，7=名义值，8=插值，9=缺测值。注：对应变量为有效值时，该质控位应为 1、2、5、7 或 8 |
| SDN_STATION | STRING | 站点标识 |
| TIME_QC | INT | TIME 的质量控制标志：0=未做质控，1=好，2=可能好，3=坏数据但可能可订正，4=坏数据，5=值已变更，6=未用，7=名义值，8=插值，9=缺测值。注：对应变量为有效值时，该质控位应为 1、2、5、7 或 8 |
| DEPH_QC | INT | DEPH 的质量控制标志：0=未做质控，1=好，2=可能好，3=坏数据但可能可订正，4=坏数据，5=值已变更，6=未用，7=名义值，8=插值，9=缺测值。注：对应变量为有效值时，该质控位应为 1、2、5、7 或 8 |
| geometry | GEOMETRY | 观测的地理位置 |

## 能拿来做什么

- 两个以上雷达站重叠区的表层总流速制图
- 近岸环流与输运研究
- 用总速度数据验证近岸模型

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('COPERNICUS/MARINE/INSITU_MULTI_4KM/RADAR_TOTAL');
```

- 数据集编号（Earth Engine ID）：`COPERNICUS/MARINE/INSITU_MULTI_4KM/RADAR_TOTAL`
- 提供方：Copernicus、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_MARINE_INSITU_MULTI_4KM_RADAR_TOTAL

## 许可与引用

- 许可：CC-BY-4.0
- 关键词：copernicus, currents, insitu, oceans, radar
> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [全球海洋水色光学产品（多源，4 公里，月度）](/pages/b4a5e847/)
- [全球海洋水色初级生产产品（多源，4 公里）](/pages/6396836c/)
- [全球海洋水色反射率产品（OLCI，300 米）](/pages/f4ffb7b4/)
- [全球海洋水色反射率产品（多源，4 公里）](/pages/472dc170/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
