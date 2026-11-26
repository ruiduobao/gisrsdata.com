---
title: "OGIM：油气基础设施制图数据库 v2.5.1"
date: 2026-11-03 12:00:00
permalink: /pages/ef98f7b4/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "edf"
  - "emissions"
  - "ghg"
  - "infrastructure-boundaries"
  - "methane"
  - "methaneair"
  - "methanesat"
  - "table"
---

# OGIM：油气基础设施制图数据库 v2.5.1

英文原名：OGIM: Oil and Gas Infrastructure Mapping Database v2.5.1

## 这是什么数据

本数据集提供全球油气（O&G）相关基础设施的位置。

油气基础设施制图（OGIM）数据库是环境保护基金（EDF）与 [MethaneSAT LLC](https://www.methanesat.org/)（EDF 的全资子公司）开发的一个项目。开发 OGIM 这样标准化的油气基础设施数据库的首要目标，是支持 MethaneSAT 对油气行业甲烷排放的排放量化、源特征刻画及其他科学与倡导相关的分析。OGIM 数据库基于对公开可得的油气设施地理空间数据源的获取、分析与质量保证，将它们合并到一个标准数据模式与坐标参考系中。

本数据集包含以下类型基础设施资产的空间位置：

* 油气井，
* 油气管道，
* 天然气压缩站，
* 集输与处理设施，
* 储罐组，
* 海上平台，
* 液化天然气（LNG）设施，
* 原油炼厂，
* 石油终端，
* 注入与处置设施，
* 设备与部件位置，
* 卫星探测的油气火炬，
* 以及「其他」油气相关基础设施，如计量站

OGIM 中的记录汇编自众多公开可得的政府与学术来源。来源清单见 [OGIM_v2.5.1_Data_Source_References.pdf](https://zenodo.org/records/13259749) 文档。每个来源的更多信息见随 [Omara 等（2023）](https://doi.org/10.5194/essd-15-3761-2023) 的「Data_Catalog」表。

关于这些设施位置相关属性的重要说明：

- 缺失值（即原始数据源缺失或未报告的值）这样处理：字符串属性赋「N/A」，数值属性赋 -999，日期/时间属性赋通用日期「1900-01-01」。

- 设施运营方名称未作任何改动，来自原始数据源，并假定截至原始来源发布之日是准确的。

有关 OGIM 数据库的更多信息，包括其开发方法与主要应用，请参阅 [Omara 等，2023](https://doi.org/10.5194/essd-15-3761-2023) 的近期出版物。

如需了解该项目的更多信息，请通过此链接联系数据提供方：[https://www.methanesat.org/contact/](https://www.methanesat.org/contact/)

本数据集将随新版本就地更新。

## 覆盖范围与时间

- 覆盖范围：全球
- 时间范围：2024-05-15 至 2024-05-15

## 分辨率与规格

- 数据类型：矢量/表格（FeatureCollection），在 Google Earth Engine 中调用

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| CATEGORY | STRING | 设施所属的油气基础设施类别。取值：CRUDE OIL REFINERIES（原油炼厂）、EQUIPMENT AND COMPONENTS（设备与部件）、INJECTION AND DISPOSAL（注入与处置）、GATHERING AND PROCESSING（集输与处理）、LNG FACILITIES（液化天然气设施）、NATURAL GAS COMPRESSOR STATION（天然气压缩站）、NATURAL GAS FLARING DETECTIONS（天然气火炬探测）、OFFSHORE PLATFORMS（海上平台）、OIL AND NATURAL GAS WELLS（油气井）、OIL AND NATURAL GAS PIPELINES（油气管道）、PETROLEUM TERMINALS（石油终端）、STATIONS - OTHER（其他站场）、TANK BATTERIES（储罐组） |
| OGIM_ID | INT | 数据集中每个设施的唯一标识符。取值在不同基础设施类别之间不重复 |
| SRC_DATE | STRING | 获取该记录的数据源的原始发布日期，格式为 YYYY-MM-DD |
| SRC_REF_ID | INT | 将记录与其对应原始数据源关联的 ID 编号。要查找给定 SRC_REF_ID 值的引用，请参阅[数据源参考清单](https://zenodo.org/records/13259749)，或随 [Omara 等（2023）](https://doi.org/10.5194/essd-15-3761-2023) 的 GeoPackage 中的「Data_Catalog」表 |
| COUNTRY | STRING | 记录所在的国家。在可能的情况下，国家名称与联合国会员国名单一致。若要素位于多个国家，COUNTRY 字段包含按字母顺序排列的这些国家的逗号分隔列表 |
| STATE_PROV | STRING | 设施所在的州或省 |
| FAC_ID | STRING | 原始来源机构用于识别设施的唯一 ID |
| FAC_NAME | STRING | 设施名称 |
| FAC_STATUS | STRING | 基础设施资产的运行状态，依据原始来源，如「ACTIVE」「SUSPENDED」「TEMPORARILY CLOSED」。FAC_STATUS 为「N/A」时，不能假定其为运行中或未运行 |
| FAC_TYPE | STRING | 设施类型的详细信息 |
| OGIM_STATUS | STRING | 原始数据源所报告设施状态的标准化版本。原始状态被归入 EDF 定义的 12 个类别之一 |
| OPERATOR | STRING | 设施运营方的名称，依据发布时的原始来源 |

## 能拿来做什么

- 全球油气基础设施空间清单
- 甲烷排放源的定位与核对
- 油气行业设施分布与排放研究

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.FeatureCollection('EDF/OGIM/current');
```

- 数据集编号（Earth Engine ID）：`EDF/OGIM/current`
- 提供方：Environmental Defense Fund - MethaneSAT、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/EDF_OGIM_current

## 许可与引用

- 许可：CC-BY-4.0
- 关键词：edf, emissions, ghg, infrastructure-boundaries, methane, methaneair, methanesat, table
- 数据引用：Omara, M., Gautam, R., O'Brien, M., Himmelberger, A., Franco, A.,
Meisenhelder, K., Hauser, G., Lyon, D., Chulakadaba, A., Miller, C. and
Franklin, J., 2023. Developing a spatially explicit global oil and gas
infrastructure database for characterizing methane emission sources at high
resolution. Earth System Science Data Discussions, 2023, pp.1-35.
[doi:10.5194/essd-15-3761-2023](https://doi.org/10.5194/essd-15-3761-2023),

- DOI：10.5194/essd-15-3761-2023

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [OGIM: Oil and Gas Infrastructure Mapping Database vv2-4_RF06_RF08 [deprecated]](/pages/60f47371/)
- [1比100万基础地理信息](/pages/ee94f8/)
- [Designation: USGS GAP PAD-US v2.0](/pages/3a617def/)
- [ESA WorldCereal AEZ v100](/pages/1c72ec66/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
