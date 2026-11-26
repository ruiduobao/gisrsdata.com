---
title: "TIGER：美国人口普查县 2018"
date: 2026-11-03 12:00:00
permalink: /pages/895b7d94/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "census"
  - "county"
  - "infrastructure-boundaries"
  - "table"
  - "tiger"
  - "us"
---

# TIGER：美国人口普查县 2018

英文原名：TIGER: US Census Counties 2018

## 这是什么数据

美国人口普查局 TIGER 数据集包含美国各州主要法定区划的 2018 年边界。在大多数州，这些实体称为「县」。在路易斯安那州，这些区划称为「教区」。

阿拉斯加有称为「自治市镇」的政府实体，其政府职能与县类似，但在某些地区这些政府职责由州直接承担，有时由市承担。因此，阿拉斯加的县等效实体包括

1. 有组织的自治市镇，1. 市与自治市镇合并实体（如朱诺），1. 市镇，以及 1. 人口普查区。（原文编号均为 1.）

人口普查区由阿拉斯加州与人口普查局为统计目的合作划定。

在四个州（马里兰州、密苏里州、内华达州与弗吉尼亚州），有一个或多个建制地方独立于任何县组织，因而构成其州的主要区划。这些建制地方称为独立市，出于数据呈现目的被视为县等效实体。

哥伦比亚特区与关岛没有主要区划，出于数据呈现目的，每个区域都被视为县等效实体。人口普查局出于数据呈现目的将以下实体视为县的等效：波多黎各的 municipio、美属萨摩亚的区与岛、北马里亚纳群岛联邦的市镇，以及美属维尔京群岛的岛。

TIGER 2018 产品的全部技术细节见 [TIGER 技术文档](https://www2.census.gov/geo/pdfs/maps-data/data/tiger/tgrshp2018/TGRSHP2018_TechDoc.pdf)。

## 覆盖范围与时间

- 覆盖范围：空间：美国；时间：2018 年；类型：矢量/表格。
- 时间范围：2018-01-01 至 2019-01-01

## 分辨率与规格

- 数据类型：矢量/表格（FeatureCollection），在 Google Earth Engine 中调用

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| ALAND | DOUBLE | 陆地面积 |
| AWATER | DOUBLE | 水域面积 |
| CBSAFP | STRING | 大都市统计区/小都市统计区代码 |
| CLASSFP | STRING | FIPS 类别代码 |
| COUNTYFP | STRING | 县 FIPS 代码 |
| COUNTYNS | STRING | 县 GNIS 代码 |
| CSAFP | STRING | 联合统计区代码 |
| FUNCSTAT | STRING | 功能状态 |
| GEOID | STRING | 县标识符：州 FIPS 代码与县 FIPS 代码的连接 |
| INTPTLAT | STRING | 内部点纬度 |
| INTPTLON | STRING | 内部点经度 |
| LSAD | STRING | 县的法定/统计区域描述 |
| METDIVFP | STRING | 大都市分区代码 |
| MTFCC | STRING | MAF/TIGER 要素类代码（=G4020） |
| NAME | STRING | 县名 |
| NAMELSAD | STRING | 县的名称与翻译的法定/统计区域描述 |
| STATEFP | STRING | 州 FIPS 代码 |

## 能拿来做什么

- 作为美国人口普查地理单元的底图与属性表。
- 做人口、社会经济数据的空间连接与制图。
- 为选址与区域分析提供行政边界。

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.FeatureCollection('TIGER/2018/Counties');
```

- 数据集编号（Earth Engine ID）：`TIGER/2018/Counties`
- 提供方：United States Census Bureau、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/TIGER_2018_Counties

## 许可与引用

- 许可：proprietary
- 关键词：census, county, infrastructure-boundaries, table, tiger, us
- 数据引用：For the creation of any reports, publications, new data sets, derived
products, or services resulting from the data set, users should
[cite the US Census Bureau](https://www.census.gov/about/policies/citation.html).


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [TIGER: US Census States 2018](/pages/b5382785/)
- [GHSL：全球人口表面 1975–2030（P2023A）](/pages/cf948667/)
- [LandScan 高清人口数据：乌克兰（2022 年 1 月）](/pages/c7a57ce4/)
- [VNP46A1：VIIRS 逐日格网日夜波段 500 米经纬线性网格夜间产品](/pages/89a1d68e/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
