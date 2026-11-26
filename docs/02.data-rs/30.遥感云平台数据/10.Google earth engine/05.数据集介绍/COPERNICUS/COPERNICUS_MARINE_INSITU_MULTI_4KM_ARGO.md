---
title: "哥白尼海洋原位观测：Argo 浮标流速"
date: 2026-11-03 12:00:00
permalink: /pages/e4b2de62/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "copernicus"
  - "currents"
  - "insitu"
  - "oceans"
---

# 哥白尼海洋原位观测：Argo 浮标流速

英文原名：Copernicus Global In-situ Observations of Ocean Currents - Argo

## 这是什么数据

原位主题集合中心（In Situ TAC）是一个分布式中心，围绕 7 个海洋学区域组织：全球海洋和 6 个 EUROGOOS 区域联盟，涉及欧洲 11 个国家的 14 个合作伙伴。它本身不布设任何观测系统，数据完全依赖哥白尼海洋服务之外的其他资金来源。

本数据集派生自 Argo 全球数据汇集中心（GDAC）的原始轨迹数据。2020 年，GDAC 分发的数据来自 15,000 多个 Argo 浮标。深层海流由浮标在停留深度的漂移计算，表层海流由浮标在海面的漂移计算。

更多细节见[用户手册](https://documentation.marine.copernicus.eu/PUM/CMEMS-INS-PUM-013-048.pdf)。

## 覆盖范围与时间

- 覆盖范围：全球海洋（原位观测）
- 时间范围：2025-03-28 至 至今

## 分辨率与规格

- 数据类型：bigquery_table，在 Google Earth Engine 中调用

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| TIME | DATETIME | 观测时间 |
| DEPTH | DOUBLE | 深度层数 |
| LATITUDE | DOUBLE | 观测纬度 |
| LONGITUDE | DOUBLE | 观测经度 |
| PRES | DOUBLE | 本次观测的代表压力，可为 0 或停留深度压力（分巴） |
| TRAJECTORY | STRING | 轨迹标识 |
| PRES_QC | INT | PRES 的质量控制标志：0=未做质控，1=好，2=可能好，3=坏数据但可能可订正，4=坏数据，5=值已变更，6=未用，7=名义值，8=插值，9=缺测值。注：对应变量为有效值时，该质控位应为 1、2、5、7 或 8 |
| EWCT | DOUBLE | 代表压力处的海水东西向流速（米/秒） |
| EWCT_QC | INT | EWCT 的质量控制标志：0=未做质控，1=好，2=可能好，3=坏数据但可能可订正，4=坏数据，5=值已变更，6=未用，7=名义值，8=插值，9=缺测值。注：对应变量为有效值时，该质控位应为 1、2、5、7 或 8 |
| NSCT | DOUBLE | 代表压力处的海水南北向流速（米/秒） |
| NSCT_QC | INT | NSCT 的质量控制标志：0=未做质控，1=好，2=可能好，3=坏数据但可能可订正，4=坏数据，5=值已变更，6=未用，7=名义值，8=插值，9=缺测值。注：对应变量为有效值时，该质控位应为 1、2、5、7 或 8 |
| TIME_QC | INT | TIME 的质量控制标志：0=未做质控，1=好，2=可能好，3=坏数据但可能可订正，4=坏数据，5=值已变更，6=未用，7=名义值，8=插值，9=缺测值。注：对应变量为有效值时，该质控位应为 1、2、5、7 或 8 |
| POSITION_QC | INT | POSITION 的质量控制标志：0=未做质控，1=好，2=可能好，3=坏数据但可能可订正，4=坏数据，5=值已变更，6=未用，7=名义值，8=插值，9=缺测值。注：对应变量为有效值时，该质控位应为 1、2、5、7 或 8 |
| CYCLE_NUMBER | DOUBLE | Argo 浮标的循环编号 |
| GROUNDED | STRING | 该循环中浮标是否触底的最佳估计：Y=是，浮标触底；B=是，经外部水深数据库核查后确认触底；N=否，浮标未触底；S=已知浮标漂移深度比原计划浅；U=未知 |
| DURATION | DOUBLE | 测量持续时长 |
| geometry | GEOMETRY | 观测的地理位置 |

## 能拿来做什么

- 由 Argo 浮标漂移估算深层与表层海流
- 用原位轨迹数据研究海洋环流
- 在 BigQuery 里直接查询浮标观测

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('COPERNICUS/MARINE/INSITU_MULTI_4KM/ARGO');
```

- 数据集编号（Earth Engine ID）：`COPERNICUS/MARINE/INSITU_MULTI_4KM/ARGO`
- 提供方：Copernicus、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_MARINE_INSITU_MULTI_4KM_ARGO

## 许可与引用

- 许可：CC-BY-4.0
- 关键词：copernicus, currents, insitu, oceans
> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [全球海洋水色光学产品（多源，4 公里，月度）](/pages/b4a5e847/)
- [全球海洋水色初级生产产品（多源，4 公里）](/pages/6396836c/)
- [全球海洋水色反射率产品（OLCI，300 米）](/pages/f4ffb7b4/)
- [全球海洋水色反射率产品（多源，4 公里）](/pages/472dc170/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
