---
title: "TIGER：美国人口普查 5 位邮编制表区 2020"
date: 2026-11-03 12:00:00
permalink: /pages/c4396997/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "census"
  - "infrastructure-boundaries"
  - "table"
  - "tiger"
  - "us"
  - "zcta"
  - "zip-code"
---

# TIGER：美国人口普查 5 位邮编制表区 2020

英文原名：TIGER: US Census 5-digit ZIP Code Tabulation Areas 2020

## 这是什么数据

邮编制表区（ZCTA）是美国邮政（USPS）5 位邮编的近似区域表示。人口普查局通过将每个包含地址的人口普查街区分配到单个邮编制表区来定义 ZCTA，通常是该街区内地址出现频率最高的邮编所对应的 ZCTA。不含地址但被单个邮编制表区完全包围的街区（飞地）分配给周围的 ZCTA；被多个 ZCTA 包围的街区将按最长共享边界加入单个 ZCTA。

人口普查局使用一个 5 字符数字代码识别 5 位邮编制表区，该代码代表该 ZCTA 内出现频率最高的 USPS 邮编。此代码可能包含前导零。

数据用户不应使用 ZCTA 来识别邮件投递的官方 USPS 邮编。USPS 会定期更改邮编以支持更高效的邮件投递。主要覆盖非住宅或邮政信箱地址的邮编可能没有对应的 ZCTA，因为划定过程主要使用住宅地址，导致偏向城市式邮件投递所用的邮编。

TIGER 2020 产品的全部技术细节见 [TIGER 技术文档](https://www2.census.gov/geo/pdfs/maps-data/data/tiger/tgrshp2020/TGRSHP2020_TechDoc_Ch5.pdf)。

## 覆盖范围与时间

- 覆盖范围：空间：美国（含哥伦比亚特区、波多黎各与岛屿地区）；时间：2020 年；类型：矢量/表格。
- 时间范围：2020-01-01 至 2020-01-02

## 分辨率与规格

- 数据类型：矢量/表格（FeatureCollection），在 Google Earth Engine 中调用

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| ALAND20 | DOUBLE | 2020 年人口普查陆地面积 |
| AWATER20 | DOUBLE | 2020 年人口普查水域面积 |
| CLASSFP20 | STRING | 2020 年人口普查 FIPS 55 类别代码 |
| FUNCSTAT20 | STRING | 2020 年人口普查功能状态（恒为「S」，即「统计实体」） |
| GEOID20 | STRING | 2020 年人口普查 5 位邮编制表区标识符 |
| INTPTLAT20 | STRING | 2020 年人口普查内部点的纬度 |
| INTPTLON20 | STRING | 2020 年人口普查内部点的经度 |
| MTFCC20 | STRING | MAF/TIGER 要素类代码（恒为「G6350」） |
| ZCTA5CE20 | STRING | 2020 年人口普查 5 位邮编制表区代码 |

## 能拿来做什么

- 作为美国人口普查地理单元的底图与属性表。
- 做人口、社会经济数据的空间连接与制图。
- 为选址与区域分析提供行政边界。

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.FeatureCollection('TIGER/2020/ZCTA5');
```

- 数据集编号（Earth Engine ID）：`TIGER/2020/ZCTA5`
- 提供方：United States Census Bureau、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/TIGER_2020_ZCTA5

## 许可与引用

- 许可：proprietary
- 关键词：census, infrastructure-boundaries, table, tiger, us, zcta, zip-code
- 数据引用：For the creation of any reports, publications, new data sets, derived
products, or services resulting from the data set, users should
[cite the US Census Bureau](https://www.census.gov/about/policies/citation.html).


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [TIGER: 2020 Tabulation (Census) Block ](/pages/17e8e957/)
- [TIGER: US Census Block Groups (BG) 2020](/pages/d8ec0b36/)
- [TIGER: US Census Tracts](/pages/7862b5d6/)
- [GHSL：全球人口表面 1975–2030（P2023A）](/pages/cf948667/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
