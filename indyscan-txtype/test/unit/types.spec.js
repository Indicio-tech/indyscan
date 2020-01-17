/* eslint-env jest */
const txtype = require('../../index')

describe('basic suite', () => {
  it('should convert tx name to code', async () => {
    expect(txtype.txNameToTxCode('NYM')).toBe('1')
    expect(txtype.txNameToTxCode('ATTRIB')).toBe('100')
    expect(txtype.txNameToTxCode('SCHEMA')).toBe('101')
    expect(txtype.txNameToTxCode('CLAIM_DEF')).toBe('102')
    expect(txtype.txNameToTxCode('REVOC_REG_DEF')).toBe('113')
    expect(txtype.txNameToTxCode('REVOC_REG_ENTRY')).toBe('114')
    expect(txtype.txNameToTxCode('SET_CONTEXT')).toBe('200')
    expect(txtype.txNameToTxCode('NODE')).toBe('0')
    expect(txtype.txNameToTxCode('POOL_UPGRADE')).toBe('109')
    expect(txtype.txNameToTxCode('NODE_UPGRADE')).toBe('110')
    expect(txtype.txNameToTxCode('POOL_CONFIG')).toBe('111')
    expect(txtype.txNameToTxCode('AUTH_RULE')).toBe('120')
    expect(txtype.txNameToTxCode('AUTH_RULES')).toBe('122')
    expect(txtype.txNameToTxCode('TXN_AUTHOR_AGREEMENT')).toBe('4')
    expect(txtype.txNameToTxCode('TXN_AUTHOR_AGREEMENT_AML')).toBe('5')
  })

  it('should convert subledger id to name', async () => {
    expect(txtype.subledgerIdToName('0')).toBe('POOL')
    expect(txtype.subledgerIdToName('1')).toBe('DOMAIN')
    expect(txtype.subledgerIdToName('2')).toBe('CONFIG')
    expect(txtype.subledgerIdToName('3')).toBe('AUDIT')
    expect(txtype.subledgerIdToName(0)).toBe('POOL')
    expect(txtype.subledgerIdToName(1)).toBe('DOMAIN')
    expect(txtype.subledgerIdToName(2)).toBe('CONFIG')
    expect(txtype.subledgerIdToName(3)).toBe('AUDIT')
  })

  it('should convert subledger name to id', async () => {
    expect(txtype.subledgerNameToId('POOL')).toBe('0')
    expect(txtype.subledgerNameToId('DOMAIN')).toBe('1')
    expect(txtype.subledgerNameToId('CONFIG')).toBe('2')
    expect(txtype.subledgerNameToId('AUDIT')).toBe('3')
  })

  it('should convert tx code to name', async () => {
    expect(txtype.txTypeToTxName('1')).toBe('NYM')
    expect(txtype.txTypeToTxName(1)).toBe('NYM')
    expect(txtype.txTypeToTxName('100')).toBe('ATTRIB')
    expect(txtype.txTypeToTxName(100)).toBe('ATTRIB')
    expect(txtype.txTypeToTxName('101')).toBe('SCHEMA')
    expect(txtype.txTypeToTxName(101)).toBe('SCHEMA')
    expect(txtype.txTypeToTxName('102')).toBe('CLAIM_DEF')
    expect(txtype.txTypeToTxName(102)).toBe('CLAIM_DEF')
    expect(txtype.txTypeToTxName('113')).toBe('REVOC_REG_DEF')
    expect(txtype.txTypeToTxName(113)).toBe('REVOC_REG_DEF')
    expect(txtype.txTypeToTxName('114')).toBe('REVOC_REG_ENTRY')
    expect(txtype.txTypeToTxName(114)).toBe('REVOC_REG_ENTRY')
    expect(txtype.txTypeToTxName('200')).toBe('SET_CONTEXT')
    expect(txtype.txTypeToTxName(200)).toBe('SET_CONTEXT')
    expect(txtype.txTypeToTxName('0')).toBe('NODE')
    expect(txtype.txTypeToTxName(0)).toBe('NODE')
    expect(txtype.txTypeToTxName('109')).toBe('POOL_UPGRADE')
    expect(txtype.txTypeToTxName(109)).toBe('POOL_UPGRADE')
    expect(txtype.txTypeToTxName('110')).toBe('NODE_UPGRADE')
    expect(txtype.txTypeToTxName(110)).toBe('NODE_UPGRADE')
    expect(txtype.txTypeToTxName('111')).toBe('POOL_CONFIG')
    expect(txtype.txTypeToTxName(111)).toBe('POOL_CONFIG')
    expect(txtype.txTypeToTxName('120')).toBe('AUTH_RULE')
    expect(txtype.txTypeToTxName(120)).toBe('AUTH_RULE')
    expect(txtype.txTypeToTxName('122')).toBe('AUTH_RULES')
    expect(txtype.txTypeToTxName(122)).toBe('AUTH_RULES')
    expect(txtype.txTypeToTxName('4')).toBe('TXN_AUTHOR_AGREEMENT')
    expect(txtype.txTypeToTxName(4)).toBe('TXN_AUTHOR_AGREEMENT')
    expect(txtype.txTypeToTxName('5')).toBe('TXN_AUTHOR_AGREEMENT_AML')
    expect(txtype.txTypeToTxName(5)).toBe('TXN_AUTHOR_AGREEMENT_AML')
  })

  it('should convert tx code to belonding subledger name', async () => {
    expect(txtype.txTypeToSubledgerName('1')).toBe('DOMAIN')
    expect(txtype.txTypeToSubledgerName(1)).toBe('DOMAIN')
    expect(txtype.txTypeToSubledgerName('100')).toBe('DOMAIN')
    expect(txtype.txTypeToSubledgerName(100)).toBe('DOMAIN')
    expect(txtype.txTypeToSubledgerName('101')).toBe('DOMAIN')
    expect(txtype.txTypeToSubledgerName(101)).toBe('DOMAIN')
    expect(txtype.txTypeToSubledgerName('102')).toBe('DOMAIN')
    expect(txtype.txTypeToSubledgerName(102)).toBe('DOMAIN')
    expect(txtype.txTypeToSubledgerName('113')).toBe('DOMAIN')
    expect(txtype.txTypeToSubledgerName('114')).toBe('DOMAIN')
    expect(txtype.txTypeToSubledgerName(114)).toBe('DOMAIN')
    expect(txtype.txTypeToSubledgerName('200')).toBe('DOMAIN')
    expect(txtype.txTypeToSubledgerName(200)).toBe('DOMAIN')
    expect(txtype.txTypeToSubledgerName('0')).toBe('POOL')
    expect(txtype.txTypeToSubledgerName(0)).toBe('POOL')
    expect(txtype.txTypeToSubledgerName('109')).toBe('CONFIG')
    expect(txtype.txTypeToSubledgerName(109)).toBe('CONFIG')
    expect(txtype.txTypeToSubledgerName('110')).toBe('CONFIG')
    expect(txtype.txTypeToSubledgerName(110)).toBe('CONFIG')
    expect(txtype.txTypeToSubledgerName('111')).toBe('CONFIG')
    expect(txtype.txTypeToSubledgerName(111)).toBe('CONFIG')
    expect(txtype.txTypeToSubledgerName('120')).toBe('CONFIG')
    expect(txtype.txTypeToSubledgerName(120)).toBe('CONFIG')
    expect(txtype.txTypeToSubledgerName('122')).toBe('CONFIG')
    expect(txtype.txTypeToSubledgerName(122)).toBe('CONFIG')
    expect(txtype.txTypeToSubledgerName('4')).toBe('CONFIG')
    expect(txtype.txTypeToSubledgerName(4)).toBe('CONFIG')
    expect(txtype.txTypeToSubledgerName('5')).toBe('CONFIG')
    expect(txtype.txTypeToSubledgerName(5)).toBe('CONFIG')
  })

  it('should get all domain transaction names', async () => {
    expect(txtype.getDomainsTxNames().includes('NYM')).toBeTruthy()
    expect(txtype.getDomainsTxNames().includes('ATTRIB')).toBeTruthy()
    expect(txtype.getDomainsTxNames().includes('SCHEMA')).toBeTruthy()
    expect(txtype.getDomainsTxNames().includes('CLAIM_DEF')).toBeTruthy()
    expect(txtype.getDomainsTxNames().includes('REVOC_REG_DEF')).toBeTruthy()
    expect(txtype.getDomainsTxNames().includes('REVOC_REG_ENTRY')).toBeTruthy()
    expect(txtype.getDomainsTxNames().includes('SET_CONTEXT')).toBeTruthy()
  })

  it('should get all pool transaction names', async () => {
    expect(txtype.getPoolTxNames().includes('NODE')).toBeTruthy()
  })

  it('should get all config transaction names', async () => {
    expect(txtype.getConfigTxNames().includes('POOL_UPGRADE')).toBeTruthy()
    expect(txtype.getConfigTxNames().includes('NODE_UPGRADE')).toBeTruthy()
    expect(txtype.getConfigTxNames().includes('POOL_CONFIG')).toBeTruthy()
    expect(txtype.getConfigTxNames().includes('AUTH_RULE')).toBeTruthy()
    expect(txtype.getConfigTxNames().includes('AUTH_RULES')).toBeTruthy()
    expect(txtype.getConfigTxNames().includes('TXN_AUTHOR_AGREEMENT')).toBeTruthy()
    expect(txtype.getConfigTxNames().includes('TXN_AUTHOR_AGREEMENT_AML')).toBeTruthy()
  })
})